import "../style/Proyectos.css";
import githubIcon from '../img/github.svg';
import { listaProyectos, iconos } from "../data/proyectos";

const Proyectos = () => {
    return (
        <section className="proyectos-container" id="proyectos">
            <h2 className="titulo-proyectos">Mis Proyectos</h2>
            <p className="descripcion-seccion">
                A continuación presento una selección de proyectos que demuestran mis habilidades técnicas y mi experiencia en el desarrollo de soluciones web completas, aplicando buenas prácticas y tecnologías modernas.
            </p>
            <div className="grid-proyectos">
                {listaProyectos.map((proyecto, index) => (
                    <div 
                        className="card-proyecto" 
                        key={index} 
                    >
                        <img src={proyecto.imagen} alt={proyecto.titulo} className="proyecto-imagen" loading="lazy" />
                        <div className="card-content">
                            <div className="card-header">
                                <h3>{proyecto.titulo}</h3>
                            </div>
                            <div className="card-body">
                                <p>{proyecto.descripcion}</p>
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
                            </div>
                            <div className="card-footer">
                                <a href={proyecto.repo} target="_blank" rel="noopener noreferrer" className="btn-repo">
                                    Ver Código <img src={githubIcon} alt="GitHub" className="tech-icon" />
                                </a>
                                {proyecto.demo && (
                                    <a href={proyecto.demo} target="_blank" rel="noopener noreferrer" className="btn-demo">
                                        Ver App
                                        {/* Ícono de flecha saliendo (SVG) */}
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path fillRule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"/><path fillRule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"/></svg>
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Proyectos;
