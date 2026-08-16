import { useEffect, useRef } from 'react';
import '../style/Contactame.css';
import linkedinIcon from '../img/linkedin.svg';
import githubIcon from '../img/github.svg';
import { useLanguage } from '../context/LanguageContext.jsx';
import { useContactForm } from '../hooks/useContactForm.js';
import DescargarCV from './DescargarCV';

const RECAPTCHA_SITE_KEY = '6LdnikEtAAAAAPTI05U-5NLBOYgESy9Ezosd6lQk';

const Contactame = () =>{
    const { language } = useLanguage();

    // Consumimos la lógica desde nuestro Custom Hook
    const { estado, handleSubmit } = useContactForm();

    // Renderizamos el widget a mano en vez de confiar en el escaneo automático de Google:
    // ese escaneo corre una sola vez apenas carga el script, y si el div todavía no está
    // montado en ese instante (carrera con React), el captcha nunca aparece.
    const recaptchaRef = useRef(null);
    // Sección completa: la observamos para recién pedir el script de reCAPTCHA cuando
    // el usuario se está por acercar a Contacto, no en cada carga de página. El script
    // de Google pesa ~1.1MB y consume >1s de hilo principal — no vale la pena pagarlo
    // si el visitante nunca llega hasta acá.
    const footerRef = useRef(null);

    useEffect(() => {
        const footer = footerRef.current;
        if (!footer) return;

        let intervalId;

        const renderRecaptcha = () => {
            if (window.grecaptcha?.render && recaptchaRef.current && recaptchaRef.current.childElementCount === 0) {
                window.grecaptcha.render(recaptchaRef.current, { sitekey: RECAPTCHA_SITE_KEY });
                return true;
            }
            return false;
        };

        const startPolling = () => {
            if (!renderRecaptcha()) {
                intervalId = setInterval(() => {
                    if (renderRecaptcha()) clearInterval(intervalId);
                }, 200);
            }
        };

        const loadRecaptchaScript = () => {
            if (document.getElementById('recaptcha-script')) {
                startPolling();
                return;
            }
            const script = document.createElement('script');
            script.id = 'recaptcha-script';
            script.src = 'https://www.google.com/recaptcha/api.js?render=explicit';
            script.async = true;
            script.defer = true;
            script.onload = startPolling;
            document.head.appendChild(script);
        };

        // rootMargin generoso: empieza a pedir el script ~600px antes de que la sección
        // entre en pantalla, para que ya esté listo cuando el usuario llegue al formulario.
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    loadRecaptchaScript();
                    observer.disconnect();
                }
            },
            { rootMargin: '600px 0px' }
        );
        observer.observe(footer);

        return () => {
            observer.disconnect();
            clearInterval(intervalId);
        };
    }, []);

    return(
        <footer id="contacto" className="contacto-seccion" ref={footerRef}>
            <div className="contacto-container">
                <div className="contacto-info">
                    <h2 className='contactame-titulo'>{language === 'es' ? 'Contáctame' : 'Contact Me'}</h2>
                    <p className="contacto-texto">
                        {language === 'es'
                            ? 'Puedes contactarme a través del siguiente formulario o mediante mis redes sociales:'
                            : 'You can contact me through the following form or via my social networks:'}
                    </p>
                    <p className="contacto-nota-spam">
                        {language === 'es'
                            ? '📩 Al enviar el formulario vas a recibir una respuesta automática confirmando tu mensaje. Si no la ves en tu bandeja de entrada, revisá spam o correo no deseado.'
                            : "📩 After submitting the form you'll get an automatic reply confirming your message. If you don't see it in your inbox, check your spam/junk folder."}
                    </p>
                    <div className="redes-sociales-contacto">
                        <a href="https://www.linkedin.com/in/eduardo-ezequiel-ortiz-7815a526b" target="_blank" rel="noopener noreferrer">
                            <img className='icono' src={linkedinIcon} alt="LinkedIn" title={language === 'es' ? 'Mi LinkedIn' : 'My LinkedIn'}/>
                        </a>
                        <a href="https://github.com/Ezequiel-247" target="_blank" rel="noopener noreferrer">
                            <img className='icono' src={githubIcon} alt="GitHub" title={language === 'es' ? 'Mi GitHub' : 'My GitHub'}/>
                        </a>
                    </div>
                    <div className="contacto-cv">
                        <DescargarCV />
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

                    {/* Verificación Anti-Robot: Google reCAPTCHA (validado por Formspree del lado del servidor) */}
                    <div ref={recaptchaRef}></div>

                    {estado.error && <p className="mensaje-error">{estado.error}</p>}
                    {estado.enviado && <p className="mensaje-exito">{language === 'es' ? '¡Mensaje enviado con éxito!' : 'Message sent successfully!'}</p>}

                    <button type="submit" className="btn-enviar" disabled={estado.enviando}>
                        {estado.enviando 
                            ? (language === 'es' ? 'Enviando...' : 'Sending...') 
                            : (language === 'es' ? 'Enviar Mensaje' : 'Send Message')}
                    </button>
                </form>
            </div>
            {/* La parte inferior del footer con el logo, copyright y enlaces sociales */}
            <div className="footer-bottom">
                <div className="footer-brand-block">
                    <span className="footer-brand">Eduardo Ezequiel Ortiz</span>
                    <p className="footer-copyright">&copy; {new Date().getFullYear()} {language === 'es' ? 'Todos los derechos reservados.' : 'All rights reserved.'}</p>
                </div>
                <nav className="footer-links" aria-label={language === 'es' ? 'Enlaces del pie de página' : 'Footer links'}>
                    <a href="#habilidades">{language === 'es' ? 'Stack' : 'Stack'}</a>
                    <a href="#proyectos">{language === 'es' ? 'Proyectos' : 'Projects'}</a>
                    <a href="https://github.com/Ezequiel-247" target="_blank" rel="noopener noreferrer">GitHub</a>
                    <a href="https://www.linkedin.com/in/eduardo-ezequiel-ortiz-7815a526b" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                </nav>
            </div>
        </footer>
    )
};

export default Contactame;