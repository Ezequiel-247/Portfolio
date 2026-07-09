import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { useLanguage } from '../context/LanguageContext.jsx';

const EMAILJS_SERVICE_ID = 'service_sn5416w';
const EMAILJS_TEMPLATE_ID = 'template_eb4afyr';
const EMAILJS_PUBLIC_KEY = 'bdLrmdJldN-MoeQcl';

export const useContactForm = () => {
    const { language } = useLanguage();
    
    const [estado, setEstado] = useState({
        enviando: false,
        enviado: false,
        error: null
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setEstado({ ...estado, enviando: true, error: null });

        const form = e.target;
        const data = new FormData(form);
        const email = data.get('email');

        // 1. Validación de formato (permite "+alias", y TLDs modernos de más de 6 caracteres)
        const emailRegex = /^[a-zA-Z0-9._+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,24}$/;
        if (!emailRegex.test(email)) {
            setEstado({ enviando: false, enviado: false, error: language === 'es' ? "Por favor, ingresa un email válido." : "Please enter a valid email." });
            return;
        }

        // 2. Validación de longitud
        if (email.split('@')[0].length < 3) {
            setEstado({ enviando: false, enviado: false, error: language === 'es' ? "El nombre de usuario del correo es muy corto." : "The email username is too short." });
            return;
        }

        // 3. Validación de reCAPTCHA (el token viaja dentro del propio form como g-recaptcha-response)
        if (!window.grecaptcha || !window.grecaptcha.getResponse()) {
            setEstado({ enviando: false, enviado: false, error: language === 'es' ? "Por favor, completa la verificación reCAPTCHA." : "Please complete the reCAPTCHA verification." });
            return;
        }

        try {
            const response = await fetch("https://formspree.io/f/xlgggbbn", {
                method: "POST",
                body: data,
                headers: { 'Accept': 'application/json' }
            });

            if (response.ok) {
                form.reset();
                window.grecaptcha.reset();
                setEstado({ enviando: false, enviado: true, error: null });
                setTimeout(() => setEstado(prev => ({ ...prev, enviado: false })), 5000);

                // Auto-reply al visitante: best-effort, si falla no afecta la confirmación ya mostrada
                const replyMessage = language === 'es'
                    ? '¡Gracias por escribirme! Recibí tu mensaje y te voy a responder a la brevedad.'
                    : 'Thanks for reaching out! I received your message and will get back to you shortly.';

                emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, {
                    name: data.get('nombre'),
                    email,
                    reply_message: replyMessage
                }, EMAILJS_PUBLIC_KEY).catch(err => console.error('Error al enviar el auto-reply:', err));
            } else {
                window.grecaptcha.reset();
                setEstado({ enviando: false, enviado: false, error: language === 'es' ? "Hubo un error al enviar el mensaje." : "There was an error sending the message." });
            }
        } catch (error) {
            console.error("Error al enviar el formulario:", error);
            window.grecaptcha?.reset();
            setEstado({ enviando: false, enviado: false, error: language === 'es' ? "Error de conexión. Inténtalo más tarde." : "Connection error. Try again later." });
        }
    };

    return { estado, handleSubmit };
};