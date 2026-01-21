import perfilImg from '../img/Perfil_1.png';
import linkedinIcon from '../img/linkedin.svg';
import githubIcon from '../img/github.svg';
import '../style/Main.css';

const Main = () =>{
    return (
        <main className="main-container" id="inicio">
            <section className="perfil-seccion">
                <div className="imagen-container">
                    <img className="perfil-img" src={perfilImg} alt="Eduardo Ezequiel Ortiz" />
                    <h3>Mis Redes Sociales</h3>
                    <div className="redes-sociales">
                        <a href="https://www.linkedin.com/in/eduardo-ezequiel-ortiz-7815a526b" target="_blank" rel="noopener noreferrer">
                            <img className='icono' src={linkedinIcon} alt="LinkedIn" title='Mi Linkedin'/>
                        </a>
                        <a href="https://github.com/Ezequiel-247" target="_blank" rel="noopener noreferrer">
                            <img className='icono' src={githubIcon} alt="GitHub" title='Mi Git-Hub'/>
                        </a>
                    </div>
                </div>
                <div className="info-container">
                    <h1 className="nombre">Eduardo Ezequiel Ortiz</h1>
                    <h2 className="puesto">Desarrollador Back-end</h2>
                    
                    <div className="botones-container">
                        <a href="Ezequiel-Ortiz-Curriculum-2025.pdf" download className="btn btn-primary" title='Descargar Curriculum'>Descargar CV</a>
                    </div>

                    <div className="sobre-mi" id="sobre-mi">
                        <h3>Sobre Mí</h3>
                        <p>
                            Soy Desarrollador de Software con experiencia laboral en el INTA (Instituto Nacional de Tecnología Agropecuaria) como desarrollador full-stack, con un enfoque particular en el backend.
                            <br /><br />
                            Acabo de completar mi Tecnicatura Universitaria en Programación (UNAHUR) y me encuentro en la transición para iniciar la Licenciatura en Informatica.
                            <br /><br />
                            Me destaco por mi capacidad de adaptación y mi enfoque práctico en la resolución de problemas. Poseo conocimientos en el desarrollo Back-end, habiendo participado en proyectos con tecnologías como Python/Flask, MongoDB y JavaScript.
                        </p>
                    </div>
                </div>
            </section>
        </main>
    )
};

export default Main