import { useState, useEffect } from 'react';
import '../style/Contactame.css';
import linkedinIcon from '../img/linkedin.svg';
import githubIcon from '../img/github.svg';

const Contactame = () =>{
    const [estado, setEstado] = useState({
        enviando: false,
        enviado: false,
        error: null
    });

    // Estado para el Captcha Matemático
    const [captcha, setCaptcha] = useState({ num1: 0, num2: 0, respuesta: '' });

    // Generar números aleatorios al cargar la página
    useEffect(() => {
        generarCaptcha();
    }, []);

    const generarCaptcha = () => {
        setCaptcha({
            num1: Math.floor(Math.random() * 10) + 1, // Número entre 1 y 10
            num2: Math.floor(Math.random() * 10) + 1,
            respuesta: ''
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setEstado({ ...estado, enviando: true, error: null });

        const form = e.target;
        const data = new FormData(form);
        const email = data.get('email');

        // 1. Validación de formato (Regex estricto)
        // Exige: texto + @ + texto + . + extensión de 2 a 6 letras
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        
        if (!emailRegex.test(email)) {
            setEstado({ enviando: false, enviado: false, error: "Por favor, ingresa un email válido." });
            return;
        }

        // 2. Validación extra: Evitar correos sospechosamente cortos (ej: a@hotmail.com)
        if (email.split('@')[0].length < 3) {
            setEstado({ enviando: false, enviado: false, error: "El nombre de usuario del correo es muy corto." });
            return;
        }

        // 3. Validación de Seguridad (Captcha)
        if (parseInt(captcha.respuesta) !== captcha.num1 + captcha.num2) {
            setEstado({ enviando: false, enviado: false, error: "Respuesta incorrecta. Inténtalo de nuevo." });
            return;
        }

        try {
            const response = await fetch("https://formspree.io/f/xlgggbbn", {
                method: "POST",
                body: data,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                form.reset();
                setEstado({ enviando: false, enviado: true, error: null });
                generarCaptcha(); // Generar nueva suma para el próximo mensaje
                // Ocultar mensaje de éxito después de 5 segundos
                setTimeout(() => setEstado(prev => ({ ...prev, enviado: false })), 5000);
            } else {
                setEstado({ enviando: false, enviado: false, error: "Hubo un error al enviar el mensaje." });
            }
        } catch (error) {
            setEstado({ enviando: false, enviado: false, error: "Error de conexión. Inténtalo más tarde." });
        }
    };

    return(
        <footer id="contacto" className="contacto-seccion">
            <div className="contacto-container">
                <div className="contacto-info">
                    <h2 className='contactame-titulo'>Contáctame</h2>
                    <p className="contacto-texto">
                        Puedes contactarme a través del siguiente formulario o mediante mis redes sociales:
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

                    {/* Campo de Verificación Anti-Robot */}
                    <div className="campo">
                        <label htmlFor="captcha">Responder ¿Cuánto es {captcha.num1} + {captcha.num2}?</label>
                        <input 
                            type="number" 
                            id="captcha" 
                            value={captcha.respuesta}
                            onChange={(e) => setCaptcha({ ...captcha, respuesta: e.target.value })}
                            placeholder="Escribe el resultado..." 
                            required 
                        />
                    </div>

                    {estado.error && <p className="mensaje-error">{estado.error}</p>}
                    {estado.enviado && <p className="mensaje-exito">¡Mensaje enviado con éxito!</p>}

                    <button type="submit" className="btn-enviar" disabled={estado.enviando}>
                        {estado.enviando ? 'Enviando...' : 'Enviar Mensaje'}
                    </button>
                </form>
            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Eduardo Ezequiel Ortiz. Todos los derechos reservados.</p>
            </div>
        </footer>
    )
};

export default Contactame;