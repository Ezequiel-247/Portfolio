import { useEffect, useRef } from 'react';
import '../style/Main.css'; // Usando tus estilos globales o puedes crear Chatbot.css
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
                    <div style={{ padding: '16px 20px', borderBottom: '1px solid var(--card-border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                            <span className="material-symbols-outlined" style={{ color: 'var(--accent-color)', fontSize: '2.2rem' }}>
                                smart_toy
                            </span>
                            <h4 style={{ margin: 0, color: 'var(--accent-color)', fontFamily: 'Syne, sans-serif', fontSize: '1.2rem' }}>Asistente Virtual</h4>
                        </div>
                        <button onClick={() => setIsOpen(false)} style={{ background: 'none', border: 'none', color: 'var(--text-color)', cursor: 'pointer', fontSize: '1.5rem' }}>✖</button>
                    </div>
                    
                    <div style={{ flex: 1, padding: '20px', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '14px' }}>
                        {messages.map((msg, idx) => (
                            <div key={idx} style={{ 
                                alignSelf: msg.sender === 'user' ? 'flex-end' : 'flex-start',
                                background: msg.sender === 'user' ? 'var(--accent-color)' : 'var(--bg-secondary)',
                                color: msg.sender === 'user' ? '#000' : 'var(--text-color)',
                                padding: '12px 16px',
                                borderRadius: '14px',
                                fontSize: '0.95rem',
                                lineHeight: '1.5',
                                maxWidth: '85%',
                                whiteSpace: 'pre-wrap'
                            }}>
                                {msg.text}
                                {msg.actionUrl && (
                                    <a 
                                        href={msg.actionUrl} 
                                        // Si el link tiene ".pdf", le indicamos al navegador que lo descargue en lugar de redireccionar
                                        download={msg.actionUrl.includes('.pdf') ? true : undefined}
                                        onClick={() => setIsOpen(false)}
                                        style={{
                                            display: 'block',
                                            marginTop: '12px',
                                            padding: '10px',
                                            background: 'var(--bg-secondary)',
                                            color: 'var(--accent-color)',
                                            textDecoration: 'none',
                                            borderRadius: '8px',
                                            border: '1px solid var(--accent-color)',
                                            textAlign: 'center',
                                            fontWeight: 'bold',
                                            fontSize: '0.95rem'
                                        }}
                                    >
                                        {msg.actionText}
                                    </a>
                                )}
                            </div>
                        ))}
                        {/* Este div invisible siempre estará al final para que el auto-scroll apunte aquí */}
                        <div ref={messagesEndRef} />
                    </div>

                    <div style={{ padding: '15px', borderTop: '1px solid var(--card-border)', display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
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