import perfilImg from '../img/Perfil_1.png';
import linkedinIcon from '../img/linkedin.svg';
import githubIcon from '../img/github.svg';
import '../style/Main.css';
import { textoSobreMi } from '../data/sobreMi';
import { estudios } from '../data/estudios';
import { useLanguage } from '../context/LanguageContext';
import '../style/Educacion.css';

const Main = () =>{
    const { language } = useLanguage();
    
    const textosActuales = textoSobreMi[language];
    const estudiosActuales = estudios[language] || estudios;

    return (
        <main className="main-container" id="inicio">
            <section className="perfil-seccion">
                {/* Columna Izquierda: Foto y redes */}
                <div className="perfil-col-izquierda">
                    <div className="imagen-container group">
                        <img className="perfil-img" src={perfilImg} alt="Ezequiel Ortiz" />
                    </div>
                    <div className="redes-container">
                        <p className="redes-titulo">{language === 'es' ? 'Mis redes sociales:' : 'My social networks:'}</p>
                        <div className="redes-sociales-hero">
                            <a href="https://www.linkedin.com/in/eduardo-ezequiel-ortiz-7815a526b" target="_blank" rel="noopener noreferrer" title={language === 'es' ? 'Mi LinkedIn' : 'My LinkedIn'}>
                                <img className='icono' src={linkedinIcon} alt="LinkedIn"/>
                            </a>
                            <a href="https://github.com/Ezequiel-247" target="_blank" rel="noopener noreferrer" title={language === 'es' ? 'Mi GitHub' : 'My GitHub'}>
                                <img className='icono' src={githubIcon} alt="GitHub"/>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Columna Derecha: Título y descripción */}
                <div className="info-container">
                    <h1 className="nombre text-gradient-primary-to-blue">
                        {textosActuales.title}
                    </h1>
                    <div className="sobre-mi" id="sobre-mi">
                        <p>
                            {textosActuales.paragraphs.map((parrafo, index) => (
                                <span key={index} className="sobre-mi-parrafo">{parrafo}</span>
                            ))}
                        </p>
                    </div>
                    <div className="botones-container">
                        <a 
                            href={language === 'es' ? 'Ezequiel Ortiz Cv.pdf' : 'Ezequiel Ortiz Resume.pdf'} 
                            download={language === 'es' ? 'Ezequiel Ortiz Cv.pdf' : 'Ezequiel Ortiz Resume.pdf'} 
                            className="btn btn-primary" 
                            title={language === 'es' ? 'Descargar Curriculum' : 'Download Resume'}
                        >
                            {language === 'es' ? 'Descargar CV' : 'Download CV'}
                        </a>
                    </div>
                </div>
            </section>

            <section className="educacion-seccion" id="educacion">
                <div className="educacion-container">
                    <h2 className="titulo-seccion">{language === 'es' ? 'Educación' : 'Education'}</h2>
                    <div className="education-grid"> {/* Changed to education-grid */}
                        {estudiosActuales.map((estudio, index) => (
                            <div key={index} className="education-card">
                                <h3>{estudio.titulo}</h3>
                                <div className="institucion-container">
                                    {estudio.logo && <img src={estudio.logo} alt={`Logo ${estudio.institucion}`} className="institucion-logo" loading="lazy" />}
                                    <h4>{estudio.institucion}</h4>
                                </div>
                                <div className="education-card-badges">
                                    <span className={`estado ${estudio.estadoId === 'graduado' ? 'badge-graduado' : 'badge-en-curso'}`}>
                                        {estudio.estado}
                                    </span>
                                    {estudio.promedio && <span className="estado badge-graduado">{estudio.promedio}</span>}
                                </div>
                                <p className="education-card-description">{estudio.descripcion}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    )
};

export default Main;