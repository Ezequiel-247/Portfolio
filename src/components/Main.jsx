import perfilImg from '../img/Perfil_1.png';
import linkedinIcon from '../img/linkedin.svg';
import githubIcon from '../img/github.svg';
import { textoSobreMi } from '../data/sobreMi';
import '../style/Main.css';
import { useLanguage } from '../context/LanguageContext';

const Main = () =>{
    const { language } = useLanguage();
    
    const textosActuales = textoSobreMi[language];

    return (
        <main className="main-container" id="inicio">
            <section className="perfil-seccion">
                <div className="imagen-container">
                    <img className="perfil-img" src={perfilImg} alt="Eduardo Ezequiel Ortiz" />
                    <h3>{language === 'es' ? 'Mis Redes Sociales' : 'My Social Networks'}</h3>
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
                    <span className="eyebrow">
                        {language === 'es' ? '🟢 Disponible para nuevos proyectos' : '🟢 Available for new projects'}
                    </span>
                    <h1 className="nombre">Ezequiel Ortiz — Fullstack Developer</h1>
                    <div className="botones-container">
                        <a href="Ezequiel Ortiz Cv.pdf" download="Ezequiel Ortiz Cv.pdf" className="btn btn-primary" title='Descargar Curriculum'>{language === 'es' ? 'Descargar CV' : 'Download CV'}</a>
                    </div>

                    <div className="sobre-mi" id="sobre-mi">
                        <h3>{language === 'es' ? 'Sobre Mí' : 'About Me'}</h3>
                        <p>
                            {textosActuales.map((parrafo, index) => (
                                <span key={index}>
                                    {parrafo}
                                    {index < textosActuales.length - 1 && <><br /><br /></>}
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