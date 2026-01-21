import '../style/Contactame.css';
import linkedinIcon from '../img/linkedin.svg';
import githubIcon from '../img/github.svg';

const Contactame = () =>{
    return(
        <footer id="contacto" className="contacto-seccion">
            <div className="contacto-container">
                <div className="contacto-info">
                    <h2 className='contactame-titulo'>Contáctame</h2>
                    <p className="contacto-texto">
                        ¿Tienes algún proyecto en mente o simplemente quieres saludar? 
                        ¡Escríbeme! Estoy disponible para nuevas oportunidades y colaboraciones.
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

                <form className="formulario-contacto" action="https://formspree.io/f/xlgggbbn" method="POST">
                    {/* --- SEGURIDAD Y CONFIGURACIÓN --- */}
                    {/* Honeypot: Campo oculto anti-spam. Si un bot lo llena, el formulario se rechaza. */}
                    <input type="text" name="_gotcha" style={{ display: "none" }} />
                    {/* Asunto predefinido para que identifiques rápido el correo */}
                    <input type="hidden" name="_subject" value="Nuevo contacto desde tu Portafolio Web" />
                    {/* Redirección tras envío: Cambia la URL por la de tu sitio desplegado */}
                    <input type="hidden" name="_next" value="https://ezequiel-247.github.io/Portfolio/#contacto" />

                    <div className="campo">
                        <label htmlFor="nombre">Nombre</label>
                        <input type="text" id="nombre" name="nombre" required placeholder="Tu nombre" />
                    </div>
                    <div className="campo">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" required placeholder="tu@email.com" />
                    </div>
                    <div className="campo">
                        <label htmlFor="mensaje">Mensaje</label>
                        <textarea id="mensaje" name="mensaje" rows="5" required minLength="10" placeholder="Escribe tu mensaje aquí..."></textarea>
                    </div>
                    <button type="submit" className="btn-enviar">Enviar Mensaje</button>
                </form>
            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Eduardo Ezequiel Ortiz. Todos los derechos reservados.</p>
            </div>
        </footer>
    )
};

export default Contactame;