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

    useEffect(() => {
        // Scrollea automáticamente hacia el último mensaje cuando la lista cambia
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    return (
        <div className="chatbot-container">
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