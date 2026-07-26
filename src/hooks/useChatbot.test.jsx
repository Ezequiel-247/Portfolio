import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { LanguageProvider, useLanguage } from '../context/LanguageContext.jsx';
import { useChatbot } from './useChatbot.js';

// Combina el toggle de idioma con el hook del chatbot en un solo render,
// así el test puede cambiar el idioma "desde afuera" como haría el Header real.
function useHarness() {
    const { toggleLanguage } = useLanguage();
    const chatbot = useChatbot();
    return { toggleLanguage, ...chatbot };
}

function renderChatbot() {
    return renderHook(() => useHarness(), { wrapper: LanguageProvider });
}

describe('useChatbot', () => {
    beforeEach(() => {
        vi.useFakeTimers();
    });

    afterEach(() => {
        vi.useRealTimers();
    });

    it('arranca cerrado, sin haberse abierto, con el saludo inicial en español', () => {
        const { result } = renderChatbot();

        expect(result.current.isOpen).toBe(false);
        expect(result.current.hasOpened).toBe(false);
        expect(result.current.messages).toHaveLength(1);
        expect(result.current.messages[0].sender).toBe('bot');
        expect(result.current.messages[0].text).toMatch(/Hola/);
    });

    it('expone 5 opciones de conversación en español', () => {
        const { result } = renderChatbot();
        expect(result.current.opciones).toHaveLength(5);
        expect(result.current.opciones[0].text).toBe('¿Cuáles son sus habilidades?');
    });

    it('reinicia la conversación con el saludo en inglés al cambiar de idioma', () => {
        const { result } = renderChatbot();

        act(() => {
            result.current.toggleLanguage();
        });

        expect(result.current.language).toBe('en');
        expect(result.current.messages).toHaveLength(1);
        expect(result.current.messages[0].text).toMatch(/Hi!/);
        expect(result.current.opciones[0].text).toBe('What are his skills?');
    });

    it('al elegir una opción, agrega el mensaje del usuario al toque y la respuesta del bot 800ms después', () => {
        const { result } = renderChatbot();
        const opcion = result.current.opciones[0];

        act(() => {
            result.current.handleOptionClick(opcion);
        });

        // Mensaje del usuario: inmediato
        expect(result.current.messages).toHaveLength(2);
        expect(result.current.messages[1]).toEqual({ sender: 'user', text: opcion.text });

        // Respuesta del bot: todavía no llegó
        act(() => {
            vi.advanceTimersByTime(799);
        });
        expect(result.current.messages).toHaveLength(2);

        // A los 800ms sí
        act(() => {
            vi.advanceTimersByTime(1);
        });
        expect(result.current.messages).toHaveLength(3);
        expect(result.current.messages[2]).toMatchObject({ sender: 'bot', text: opcion.reply });
    });

    it('propaga actionUrl/actionText del bot cuando la opción los tiene (ej: descargar CV)', () => {
        const { result } = renderChatbot();
        const opcionCv = result.current.opciones.find((o) => o.actionUrl?.includes('.pdf'));

        act(() => {
            result.current.handleOptionClick(opcionCv);
        });
        act(() => {
            vi.advanceTimersByTime(800);
        });

        const botMsg = result.current.messages.at(-1);
        expect(botMsg.actionUrl).toBe(opcionCv.actionUrl);
        expect(botMsg.actionText).toBe(opcionCv.actionText);
    });
});
