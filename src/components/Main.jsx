import perfilImg from '../img/Perfil_1.png';
import linkedinIcon from '../img/linkedin.svg';
import githubIcon from '../img/github.svg';
import { textoSobreMi } from '../data/sobreMi';
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
                    <span className="eyebrow">🟢 Disponible para nuevos proyectos</span>
                    <h1 className="nombre">Ezequiel Ortiz — Backend Developer</h1>
                    <h2 className="puesto">Desarrollé software de gestión hídrica para el INTA con Python, Flask y MongoDB. Busco mi próximo desafío técnico.</h2>
                    
                    <div className="botones-container">
                        <a href="Ezequiel Ortiz Cv.pdf" download="Ezequiel Ortiz Cv.pdf" className="btn btn-primary" title='Descargar Curriculum'>Descargar CV</a>
                    </div>

                    <div className="sobre-mi" id="sobre-mi">
                        <h3>Sobre Mí</h3>
                        <p>
                            {textoSobreMi.map((parrafo, index) => (
                                <span key={index}>
                                    {parrafo}
                                    {index < textoSobreMi.length - 1 && <><br /><br /></>}
                                </span>
                            ))}
                        </p>
                    </div>
                </div>
            </section>
        </main>
    )
};

export default Main