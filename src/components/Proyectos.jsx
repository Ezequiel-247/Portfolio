import { useState, useEffect, useRef } from "react";
import "../style/Proyectos.css";
import githubIcon from '../img/github.svg';
import { listaProyectos, iconos, iconosMaterialSymbols, notaTecnica } from "../data/proyectos";
import youtubeIcon from '../img/youtube.svg'; // Asume que tienes un ícono SVG de YouTube en esta ruta
import { useLanguage } from '../context/LanguageContext';

const Proyectos = () => {
    const [expandidos, setExpandidos] = useState({});
    const [filtroActivo, setFiltroActivo] = useState('todos');
    const { language } = useLanguage();
    const gridRef = useRef(null);

    // Obtenemos los proyectos dependiendo del idioma
    const proyectosActuales = listaProyectos[language];
    const textoNota = notaTecnica[language];
    const proyectosFiltrados = filtroActivo === 'todos'
        ? proyectosActuales
        : proyectosActuales.filter((proyecto) => proyecto.tipo === filtroActivo);

    const filtros = [
        { id: 'todos', es: 'Todos', en: 'All' },
        { id: 'laboral', es: 'Experiencia laboral', en: 'Work experience' },
        { id: 'personal', es: 'Proyectos personales', en: 'Personal projects' },
    ];

    const toggleLeerMas = (proyectoId) => {
        setExpandidos(prev => ({ ...prev, [proyectoId]: !prev[proyectoId] }));
    };

    // Revela las cards con un fade + desplazamiento a medida que entran en el viewport
    useEffect(() => {
        const contenedor = gridRef.current;
        if (!contenedor) return;

        const cards = contenedor.querySelectorAll('.card-proyecto');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('reveal');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.15 });

        cards.forEach((card) => observer.observe(card));
        contenedor.scrollTo({ left: 0, behavior: 'smooth' });

        return () => observer.disconnect();
    }, [filtroActivo, language]);

    return (
        <section className="proyectos-seccion" id="proyectos">
            <div className="proyectos-container">
                <h2 className="titulo-proyectos">{language === 'es' ? 'Mis Proyectos' : 'My Projects'}</h2>
                <div className="descripcion-seccion">
                    <div className="nota-tecnica">
                        <p>{textoNota}</p>
                    </div>
                </div>
                <div className="filtros-proyectos" role="group" aria-label={language === 'es' ? 'Filtrar proyectos' : 'Filter projects'}>
                    {filtros.map((filtro) => (
                        <button
                            key={filtro.id}
                            type="button"
                            className={`filtro-proyecto ${filtroActivo === filtro.id ? 'activo' : ''}`}
                            aria-pressed={filtroActivo === filtro.id}
                            onClick={() => setFiltroActivo(filtro.id)}
                        >
                            {language === 'es' ? filtro.es : filtro.en}
                            <span className="filtro-contador">
                                {filtro.id === 'todos'
                                    ? proyectosActuales.length
                                    : proyectosActuales.filter((proyecto) => proyecto.tipo === filtro.id).length}
                            </span>
                        </button>
                    ))}
                </div>
                {proyectosFiltrados.length > 1 && (
                    <div className="carousel-hint" role="status">
                        <span>{language === 'es' ? 'Desliza para explorar los proyectos' : 'Swipe to explore the projects'}</span>
                        <span className="carousel-hint-icon" aria-hidden="true">→</span>
                    </div>
                )}
                <div
                    className={`grid-proyectos ${proyectosFiltrados.length === 1 ? 'solo-proyecto' : ''}`}
                    ref={gridRef}
                    role="region"
                    aria-label={language === 'es' ? 'Carrusel de proyectos' : 'Projects carousel'}
                    tabIndex="0"
                >
                    {proyectosFiltrados.map((proyecto) => {
                        const limiteCaracteres = 180; // Aprox. 4 a 5 líneas de texto
                        const esTextoLargo = proyecto.descripcion.length > limiteCaracteres;
                        const mostrarTodo = expandidos[proyecto.titulo];

                        return (
                        <div 
                            className="card-proyecto" 
                            key={proyecto.titulo}
                        >
                            <div className="proyecto-imagen-wrapper">
                                <img
                                    src={proyecto.imagen}
                                    alt={proyecto.titulo}
                                    className={`proyecto-imagen ${proyecto.esLogo ? 'imagen-logo' : ''} ${proyecto.esFoto ? 'imagen-foto' : ''}`}
                                    loading="lazy"
                                />
                                {proyecto.tipo === "laboral" && (
                                    <span className="badge-laboral">💼 {language === 'es' ? 'Experiencia Laboral' : 'Work Experience'}</span>
                                )}
                            </div>
                            <div className="card-content">
                                <div className="card-header">
                                    <h3>{proyecto.titulo}</h3>
                                </div>
                                <div className="card-body">
                                    <p>
                                        {esTextoLargo && !mostrarTodo 
                                            ? proyecto.descripcion.substring(0, limiteCaracteres) + "..." 
                                            : proyecto.descripcion
                                        }
                                        {esTextoLargo && (
                                            <button className="btn-leer-mas" onClick={() => toggleLeerMas(proyecto.titulo)}>
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
                                                {proyecto.tecnologias.frontend.map((tech, i) => {
                                                    const iconoValor = iconos[tech];
                                                    const esImagen = iconoValor && !iconosMaterialSymbols.has(iconoValor);
                                                    return (
                                                        <span key={i} className="tag">
                                                            {esImagen ? (
                                                                <img src={iconoValor} alt="" className="tech-icon-img" aria-hidden="true" />
                                                            ) : iconoValor ? (
                                                                <span className="material-symbols-outlined tech-icon" aria-hidden="true">{iconoValor}</span>
                                                            ) : null}
                                                            {tech}
                                                        </span>
                                                    );
                                                })}
                                            </div>
                                        </div>
                                    )}
                                    {proyecto.tecnologias.backend && proyecto.tecnologias.backend.length > 0 && (
                                        <div className="tech-category">
                                            <h4>Backend</h4>
                                            <div className="tags">
                                                {proyecto.tecnologias.backend.map((tech, i) => {
                                                    const iconoValor = iconos[tech];
                                                    const esImagen = iconoValor && !iconosMaterialSymbols.has(iconoValor);
                                                    return (
                                                        <span key={i} className="tag">
                                                            {esImagen ? (
                                                                <img src={iconoValor} alt="" className="tech-icon-img" aria-hidden="true" />
                                                            ) : iconoValor ? (
                                                                <span className="material-symbols-outlined tech-icon" aria-hidden="true">{iconoValor}</span>
                                                            ) : null}
                                                            {tech}
                                                        </span>
                                                    );
                                                })}
                                            </div>
                                        </div>
                                    )}
                                    {proyecto.tecnologias.herramientas && proyecto.tecnologias.herramientas.length > 0 && (
                                        <div className="tech-category">
                                            <h4>{language === 'es' ? 'Herramientas' : 'Tools'}</h4>
                                            <div className="tags">
                                                {proyecto.tecnologias.herramientas.map((tech, i) => {
                                                    const iconoValor = iconos[tech];
                                                    const esImagen = iconoValor && !iconosMaterialSymbols.has(iconoValor);
                                                    return (
                                                        <span key={i} className="tag">
                                                            {esImagen ? (
                                                                <img src={iconoValor} alt="" className="tech-icon-img" aria-hidden="true" />
                                                            ) : iconoValor ? (
                                                                <span className="material-symbols-outlined tech-icon" aria-hidden="true">{iconoValor}</span>
                                                            ) : null}
                                                            {tech}
                                                        </span>
                                                    );
                                                })}
                                            </div>
                                        </div>
                                    )}
                                    {proyecto.referencia && (
                                        <p className="card-referencia">
                                            {language === 'es' ? 'Referencia laboral: ' : 'Work reference: '}
                                            <strong>{proyecto.referencia.Nombre}</strong> — {proyecto.referencia.Puesto}
                                        </p>
                                    )}
                                </div>
                                <div className="card-footer">
                                    {proyecto.video && (
                                        <a href={proyecto.video} target="_blank" rel="noopener noreferrer" className="btn-video">
                                            {language === 'es' ? 'Ver Video Explicativo' : 'Watch Explanatory Video'}
                                            {/* Puedes usar un ícono de YouTube aquí, similar a cómo usas githubIcon */}
                                            <img src={youtubeIcon} alt="YouTube" className="tech-icon" />
                                        </a>
                                    )}
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
