import { useEffect, useRef } from 'react';
import '../style/Chatbot.css';
import { useChatbot } from '../hooks/useChatbot';

const Chatbot = () => {
    // Consumimos todo desde nuestro hook personalizado
    const { 
        language, 
        isOpen, 
        setIsOpen, 
        hasOpened, 
        setHasOpened, 
        messages, 
        opciones, 
        handleOptionClick 
    } = useChatbot();

    // Ref para apuntar al final del contenedor de mensajes
    const messagesEndRef = useRef(null);
    // Ref al contenedor flotante, para poder "empujarlo" hacia arriba cuando el footer aparece
    const containerRef = useRef(null);

    useEffect(() => {
        // Scrollea automáticamente hacia el último mensaje cuando la lista cambia
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        // Con el chat abierto, la ventana en mobile es fullscreen (position: fixed; inset: 0).
        // Cualquier transform en el contenedor padre la rompe (pasa a posicionarse relativa
        // al padre en vez de al viewport), así que mientras esté abierto no la tocamos.
        if (isOpen) {
            container.style.transform = '';
            return;
        }

        let frameId = null;

        const updatePosition = () => {
            // Apuntamos solo a la franja final del footer (marca + links), no a toda
            // la sección de Contacto, que arranca mucho antes en la página.
            const footerBottom = document.querySelector('.footer-bottom');
            if (!footerBottom) return;
            const overlap = window.innerHeight - footerBottom.getBoundingClientRect().top;
            container.style.transform = overlap > 0 ? `translateY(-${overlap}px)` : '';
        };

        const onScroll = () => {
            if (frameId) return;
            frameId = requestAnimationFrame(() => {
                updatePosition();
                frameId = null;
            });
        };

        updatePosition();
        window.addEventListener('scroll', onScroll, { passive: true });
        window.addEventListener('resize', onScroll);

        return () => {
            window.removeEventListener('scroll', onScroll);
            window.removeEventListener('resize', onScroll);
            if (frameId) cancelAnimationFrame(frameId);
        };
    }, [isOpen]);

    return (
        <div className="chatbot-container" ref={containerRef}>
            {!isOpen ? (
                <>
                    {!hasOpened && (
                        <div className="chatbot-tooltip">
                            {language === 'es' ? '¡Hola! Estoy aquí 👋' : 'Hi! I am here 👋'}
                        </div>
                    )}
                    <button 
                        className="btn-primary chatbot-toggle-btn" 
                        onClick={() => { setIsOpen(true); setHasOpened(true); }}
                    >
                        💬
                    </button>
                </>
            ) : (
                <div className="chatbot-window">
                    <div className="chatbot-header">
                        <div className="chatbot-header-left">
                            <span className="material-symbols-outlined chatbot-header-icon">
                                smart_toy
                            </span>
                            <h4 className="chatbot-header-title">Asistente Virtual</h4>
                        </div>
                        <button onClick={() => setIsOpen(false)} className="chatbot-close-btn">✖</button>
                    </div>

                    <div className="chatbot-messages">
                        {messages.map((msg, idx) => (
                            <div
                                key={idx}
                                className={`chatbot-message ${msg.sender === 'user' ? 'chatbot-message--user' : 'chatbot-message--bot'}`}
                            >
                                {msg.text}
                                {msg.actionUrl && (
                                    <a
                                        href={msg.actionUrl}
                                        // Si el link tiene ".pdf", le indicamos al navegador que lo descargue en lugar de redireccionar
                                        download={msg.actionUrl.includes('.pdf') ? true : undefined}
                                        onClick={() => setIsOpen(false)}
                                        className="chatbot-message-action"
                                    >
                                        {msg.actionText}
                                    </a>
                                )}
                            </div>
                        ))}
                        {/* Este div invisible siempre estará al final para que el auto-scroll apunte aquí */}
                        <div ref={messagesEndRef} />
                    </div>

                    <div className="chatbot-options">
                        {opciones.map((opt, idx) => (
                            <button 
                                key={idx}
                                onClick={() => handleOptionClick(opt)}
                                className="chatbot-option-btn"
                            >
                                {opt.text}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};
export default Chatbot;