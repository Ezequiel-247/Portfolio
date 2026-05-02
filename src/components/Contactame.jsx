import '../style/Contactame.css';
import linkedinIcon from '../img/linkedin.svg';
import githubIcon from '../img/github.svg';
import { useLanguage } from '../context/LanguageContext.jsx';
import { useContactForm } from '../hooks/useContactForm.js';

const Contactame = () =>{
    const { language } = useLanguage();
    
    // Consumimos la lógica desde nuestro Custom Hook
    const { estado, captcha, setCaptcha, handleSubmit } = useContactForm();

    return(
        <footer id="contacto" className="contacto-seccion">
            <div className="contacto-container">
                <div className="contacto-info">
                    <h2 className='contactame-titulo'>{language === 'es' ? 'Contáctame' : 'Contact Me'}</h2>
                    <p className="contacto-texto">
                        {language === 'es' 
                            ? 'Puedes contactarme a través del siguiente formulario o mediante mis redes sociales:' 
                            : 'You can contact me through the following form or via my social networks:'}
                    </p>
                    <div className="redes-sociales-contacto">
                        <a href="https://www.linkedin.com/in/eduardo-ezequiel-ortiz-7815a526b" target="_blank" rel="noopener noreferrer">
                            <img className='icono' src={linkedinIcon} alt="LinkedIn" title='Mi Linkedin'/>
                        </a>
                        <a href="https://github.com/Ezequiel-247" target="_blank" rel="noopener noreferrer">
                            <img className='icono' src={githubIcon} alt="GitHub" title='Mi Git-Hub'/>
                        </a>
                    </div>
                </div>

                <form className="formulario-contacto" onSubmit={handleSubmit}>
                    {/* --- SEGURIDAD Y CONFIGURACIÓN --- */}
                    {/* Honeypot: Campo oculto anti-spam. Si un bot lo llena, el formulario se rechaza. */}
                    <input type="text" name="_gotcha" style={{ display: "none" }} />
                    {/* Asunto predefinido para que identifiques rápido el correo */}
                    <input type="hidden" name="_subject" value="Nuevo contacto desde tu Portafolio Web" />

                    <div className="campo">
                        <label htmlFor="nombre">{language === 'es' ? 'Nombre' : 'Name'}</label>
                        <input type="text" id="nombre" name="nombre" required placeholder={language === 'es' ? 'Tu nombre' : 'Your name'} />
                    </div>
                    <div className="campo">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" required placeholder={language === 'es' ? 'tu@email.com' : 'your@email.com'} />
                    </div>
                    <div className="campo">
                        <label htmlFor="mensaje">{language === 'es' ? 'Mensaje' : 'Message'}</label>
                        <textarea id="mensaje" name="mensaje" rows="5" required minLength="10" placeholder={language === 'es' ? 'Escribe tu mensaje aquí...' : 'Write your message here...'}></textarea>
                    </div>

                    {/* Campo de Verificación Anti-Robot */}
                    <div className="campo">
                        <label htmlFor="captcha">{language === 'es' ? 'Responder ¿Cuánto es' : 'Answer: How much is'} {captcha.num1} + {captcha.num2}?</label>
                        <span className="captcha-context">🛡️ {language === 'es' ? 'Verificación anti-spam' : 'Anti-spam verification'}</span>
                        <input 
                            type="number" 
                            id="captcha" 
                            value={captcha.respuesta}
                            onChange={(e) => setCaptcha({ ...captcha, respuesta: e.target.value })}
                            placeholder={language === 'es' ? 'Escribe el resultado...' : 'Write the result...'} 
                            required 
                        />
                    </div>

                    {estado.error && <p className="mensaje-error">{estado.error}</p>}
                    {estado.enviado && <p className="mensaje-exito">{language === 'es' ? '¡Mensaje enviado con éxito!' : 'Message sent successfully!'}</p>}

                    <button type="submit" className="btn-enviar" disabled={estado.enviando}>
                        {estado.enviando 
                            ? (language === 'es' ? 'Enviando...' : 'Sending...') 
                            : (language === 'es' ? 'Enviar Mensaje' : 'Send Message')}
                    </button>
                </form>
            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Eduardo Ezequiel Ortiz. {language === 'es' ? 'Todos los derechos reservados.' : 'All rights reserved.'}</p>
            </div>
        </footer>
    )
};

export default Contactame;