import { useState } from "react";
import "../style/Proyectos.css";
import githubIcon from '../img/github.svg';
import { listaProyectos, iconos, descripcionProyectos } from "../data/proyectos";
import { useLanguage } from '../context/LanguageContext';

const Proyectos = () => {
    const [expandidos, setExpandidos] = useState({});
    const { language } = useLanguage();
    
    // Obtenemos los proyectos y la descripción dependiendo del idioma
    const proyectosActuales = listaProyectos[language];
    const textosSeccion = descripcionProyectos[language];

    const toggleLeerMas = (index) => {
        setExpandidos(prev => ({ ...prev, [index]: !prev[index] }));
    };

    return (
        <section className="proyectos-seccion" id="proyectos">
            <div className="proyectos-container">
                <h2 className="titulo-proyectos">{language === 'es' ? 'Mis Proyectos' : 'My Projects'}</h2>
                <div className="descripcion-seccion">
                    <p>{textosSeccion.intro}</p>
                    
                    <div className="nota-tecnica">
                        <span className="icono-nota" aria-label="Información">ℹ️</span>
                        <p>{textosSeccion.nota}</p>
                    </div>
                </div>
                <div className="grid-proyectos">
                    {proyectosActuales.map((proyecto, index) => {
                        const limiteCaracteres = 180; // Aprox. 4 a 5 líneas de texto
                        const esTextoLargo = proyecto.descripcion.length > limiteCaracteres;
                        const mostrarTodo = expandidos[index];

                        return (
                        <div 
                            className="card-proyecto" 
                            key={index} 
                        >
                            <img 
                                src={proyecto.imagen} 
                                alt={proyecto.titulo} 
                                className={`proyecto-imagen ${proyecto.esLogo ? 'imagen-logo' : ''} ${proyecto.esFoto ? 'imagen-foto' : ''}`} 
                                loading="lazy" 
                            />
                            <div className="card-content">
                                <div className="card-header">
                                    {proyecto.tipo === "laboral" && (
                                        <span className="badge-laboral">💼 {language === 'es' ? 'Experiencia Laboral' : 'Work Experience'}</span>
                                    )}
                                    <h3>{proyecto.titulo}</h3>
                                </div>
                                <div className="card-body">
                                    <p>
                                        {esTextoLargo && !mostrarTodo 
                                            ? proyecto.descripcion.substring(0, limiteCaracteres) + "..." 
                                            : proyecto.descripcion
                                        }
                                        {esTextoLargo && (
                                            <button className="btn-leer-mas" onClick={() => toggleLeerMas(index)}>
                                                {mostrarTodo 
                                                    ? (language === 'es' ? "Ver menos" : "See less") 
                                                    : (language === 'es' ? "Ver más" : "See more")}
                                            </button>
                                        )}
                                    </p>
                                    {proyecto.tecnologias.frontend && proyecto.tecnologias.frontend.length > 0 && (
                                        <div className="tech-category">
                                            <h4>Frontend</h4>
                                            <div className="tags">
                                                {proyecto.tecnologias.frontend.map((tech, i) => (
                                                    <span key={i} className="tag">
                                                        {iconos[tech] && <img src={iconos[tech]} alt={tech} className="tech-icon" />}
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                    {proyecto.tecnologias.backend && proyecto.tecnologias.backend.length > 0 && (
                                        <div className="tech-category">
                                            <h4>Backend</h4>
                                            <div className="tags">
                                                {proyecto.tecnologias.backend.map((tech, i) => (
                                                    <span key={i} className="tag">
                                                        {iconos[tech] && <img src={iconos[tech]} alt={tech} className="tech-icon" />}
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>
                                <div className="card-footer">
                                    {proyecto.repo && (
                                        <a href={proyecto.repo} target="_blank" rel="noopener noreferrer" className="btn-repo">
                                            {language === 'es' ? 'Ver Código' : 'View Code'} <img src={githubIcon} alt="GitHub" className="tech-icon" />
                                        </a>
                                    )}
                                    {proyecto.demo && (
                                        <a href={proyecto.demo} target="_blank" rel="noopener noreferrer" className="btn-demo">
                                            {language === 'es' ? 'Ver App' : 'View App'}
                                            {/* Ícono de flecha saliendo (SVG) */}
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path fillRule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"/><path fillRule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"/></svg>
                                        </a>
                                    )}
                                    {proyecto.enDesarrollo && (
                                        <span className="btn-proximamente" aria-label="Proyecto en desarrollo">
                                            ⏳ {language === 'es' ? 'Próximamente' : 'Coming Soon'}
                                        </span>
                                    )}
                                </div>
                            </div>
                        </div>
                    );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Proyectos;
