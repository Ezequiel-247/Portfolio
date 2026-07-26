import { describe, it, expect, vi, beforeEach } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { LanguageProvider } from '../context/LanguageContext.jsx';
import { useContactForm } from './useContactForm.js';

vi.mock('@emailjs/browser', () => ({
    default: { send: vi.fn(() => Promise.resolve()) },
}));

import emailjs from '@emailjs/browser';

// Arma un <form> real de jsdom con los campos que handleSubmit espera leer vía FormData.
function buildForm({ nombre = 'Juan Perez', email = 'juan@test.com' } = {}) {
    const form = document.createElement('form');
    form.innerHTML = `
        <input name="nombre" value="${nombre}" />
        <input name="email" value="${email}" />
        <textarea name="mensaje">Hola, quiero contactarte</textarea>
    `;
    document.body.appendChild(form);
    return form;
}

function submitEvent(form) {
    return { preventDefault: vi.fn(), target: form };
}

function renderContactForm() {
    return renderHook(() => useContactForm(), { wrapper: LanguageProvider });
}

describe('useContactForm', () => {
    beforeEach(() => {
        document.body.innerHTML = '';
        vi.restoreAllMocks();
        window.grecaptcha = { getResponse: vi.fn(() => 'fake-token'), reset: vi.fn() };
        globalThis.fetch = vi.fn(() => Promise.resolve({ ok: true }));
    });

    it('empieza sin enviar, sin éxito y sin error', () => {
        const { result } = renderContactForm();
        expect(result.current.estado).toEqual({ enviando: false, enviado: false, error: null });
    });

    it('rechaza un email con formato inválido sin llegar a hacer fetch', async () => {
        const { result } = renderContactForm();
        const form = buildForm({ email: 'no-es-un-email' });

        await act(async () => {
            await result.current.handleSubmit(submitEvent(form));
        });

        expect(result.current.estado.error).toBe('Por favor, ingresa un email válido.');
        expect(result.current.estado.enviando).toBe(false);
        expect(globalThis.fetch).not.toHaveBeenCalled();
    });

    it('rechaza un usuario de email demasiado corto', async () => {
        const { result } = renderContactForm();
        const form = buildForm({ email: 'ab@test.com' });

        await act(async () => {
            await result.current.handleSubmit(submitEvent(form));
        });

        expect(result.current.estado.error).toBe('El nombre de usuario del correo es muy corto.');
        expect(globalThis.fetch).not.toHaveBeenCalled();
    });

    it('pide completar el reCAPTCHA si no hay token', async () => {
        window.grecaptcha.getResponse.mockReturnValue('');
        const { result } = renderContactForm();
        const form = buildForm();

        await act(async () => {
            await result.current.handleSubmit(submitEvent(form));
        });

        expect(result.current.estado.error).toBe('Por favor, completa la verificación reCAPTCHA.');
        expect(globalThis.fetch).not.toHaveBeenCalled();
    });

    it('envía el formulario cuando todo es válido, resetea el form y dispara el auto-reply', async () => {
        const { result } = renderContactForm();
        const form = buildForm();
        form.reset = vi.fn();

        await act(async () => {
            await result.current.handleSubmit(submitEvent(form));
        });

        expect(globalThis.fetch).toHaveBeenCalledWith(
            'https://formspree.io/f/xlgggbbn',
            expect.objectContaining({ method: 'POST' })
        );
        expect(form.reset).toHaveBeenCalled();
        expect(window.grecaptcha.reset).toHaveBeenCalled();
        expect(emailjs.send).toHaveBeenCalled();
        expect(result.current.estado).toEqual({ enviando: false, enviado: true, error: null });
    });

    it('muestra error si el servidor responde con un status no ok', async () => {
        globalThis.fetch = vi.fn(() => Promise.resolve({ ok: false }));
        const { result } = renderContactForm();
        const form = buildForm();

        await act(async () => {
            await result.current.handleSubmit(submitEvent(form));
        });

        expect(result.current.estado.error).toBe('Hubo un error al enviar el mensaje.');
        expect(result.current.estado.enviado).toBe(false);
        expect(window.grecaptcha.reset).toHaveBeenCalled();
    });

    it('muestra error de conexión si el fetch rechaza (sin red)', async () => {
        globalThis.fetch = vi.fn(() => Promise.reject(new Error('network down')));
        const { result } = renderContactForm();
        const form = buildForm();

        await act(async () => {
            await result.current.handleSubmit(submitEvent(form));
        });

        expect(result.current.estado.error).toBe('Error de conexión. Inténtalo más tarde.');
    });
});
