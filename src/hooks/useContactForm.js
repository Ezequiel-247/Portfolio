import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext.jsx';

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

        // 1. Validación de formato
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
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