import { useState, useEffect, useRef } from "react";
import "../style/Proyectos.css";
import githubIcon from '../img/github.svg';
import { listaProyectos, iconos, iconosMaterialSymbols, notaTecnica } from "../data/proyectos";
import youtubeIcon from '../img/youtube.svg';
import { useLanguage } from '../context/LanguageContext';

const Proyectos = () => {
    const [expandidos, setExpandidos] = useState({});
    const [filtroActivo, setFiltroActivo] = useState('todos');
    const { language } = useLanguage();
    const sectionRef = useRef(null);

    const proyectosActuales = listaProyectos[language];
    const textoNota = notaTecnica[language];

    const proyectosLaborales = proyectosActuales.filter(p => p.tipo === 'laboral');
    const proyectosPersonales = proyectosActuales.filter(p => p.tipo === 'personal');
    const proyectosFiltrados = filtroActivo === 'todos' 
        ? proyectosActuales 
        : proyectosActuales.filter(p => p.tipo === filtroActivo);

    const filtros = [
        { id: 'todos', es: 'Todos', en: 'All' },
        { id: 'laboral', es: 'Experiencia laboral', en: 'Work experience' },
        { id: 'personal', es: 'Proyectos personales', en: 'Personal projects' },
    ];

    const toggleLeerMas = (proyectoId) => {
        setExpandidos(prev => ({ ...prev, [proyectoId]: !prev[proyectoId] }));
    };

    useEffect(() => {
        const contenedor = sectionRef.current;
        if (!contenedor) return;

        const cards = contenedor.querySelectorAll('.card-proyecto');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('reveal');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

        cards.forEach((card) => observer.observe(card));

        return () => observer.disconnect();
    }, [filtroActivo, language]);

    const renderTechTags = (proyecto) => {
        const allTechs = [
            ...(proyecto.tecnologias.frontend || []),
            ...(proyecto.tecnologias.backend || []),
            ...(proyecto.tecnologias.herramientas || [])
        ];

        return (
            <div className="tags-compact">
                {allTechs.map((tech, i) => {
                    const iconoValor = iconos[tech];
                    const esImagen = iconoValor && !iconosMaterialSymbols.has(iconoValor);
                    return (
                        <span key={i} className="tag-pill" title={tech}>
                            {esImagen ? (
                                <img src={iconoValor} alt="" className="tech-icon-img" aria-hidden="true" />
                            ) : iconoValor ? (
                                <span className="material-symbols-outlined tech-icon" aria-hidden="true">{iconoValor}</span>
                            ) : null}
                            <span className="tag-text">{tech}</span>
                        </span>
                    );
                })}
            </div>
        );
    };

    const renderCard = (proyecto, isFeatured = false) => {
        const limiteCaracteres = isFeatured ? 220 : 120;
        const esTextoLargo = proyecto.descripcion.length > limiteCaracteres;
        const mostrarTodo = expandidos[proyecto.titulo];

        return (
            <div 
                className={`card-proyecto ${isFeatured ? 'card-destacada-horizontal' : 'card-grid-compacta'}`} 
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
                        <p className={`descripcion-texto ${!mostrarTodo && !isFeatured ? 'line-clamp' : ''}`}>
                            {esTextoLargo && !mostrarTodo 
                                ? proyecto.descripcion.substring(0, limiteCaracteres) + "..." 
                                : proyecto.descripcion
                            }
                            {esTextoLargo && (
                                <button className="btn-leer-mas" onClick={() => toggleLeerMas(proyecto.titulo)}>
                                    {mostrarTodo 
                                        ? (language === 'es' ? " Ver menos" : " See less") 
                                        : (language === 'es' ? " Ver más" : " See more")}
                                </button>
                            )}
                        </p>

                        <div className="tech-wrapper">
                            {renderTechTags(proyecto)}
                        </div>

                        {proyecto.referencia && (
                            <p className="card-referencia">
                                {language === 'es' ? 'Referencia: ' : 'Reference: '}
                                <strong>{proyecto.referencia.Nombre}</strong> ({proyecto.referencia.Puesto})
                            </p>
                        )}
                    </div>

                    <div className="card-footer">
                        {proyecto.video && (
                            <a href={proyecto.video} target="_blank" rel="noopener noreferrer" className="btn-action btn-video">
                                {language === 'es' ? 'Ver Video' : 'Watch Video'}
                                <img src={youtubeIcon} alt="YouTube" className="tech-icon-cta" />
                            </a>
                        )}
                        {proyecto.repo && (
                            <a href={proyecto.repo} target="_blank" rel="noopener noreferrer" className="btn-action btn-repo">
                                {language === 'es' ? 'Código' : 'Code'} 
                                <img src={githubIcon} alt="GitHub" className="tech-icon-cta" />
                            </a>
                        )}
                        {proyecto.demo && (
                            <a href={proyecto.demo} target="_blank" rel="noopener noreferrer" className="btn-action btn-demo">
                                {language === 'es' ? (proyecto.tipo === 'laboral' ? 'Visitar Web' : 'Ver App') : 'Live Demo'}
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"/>
                                    <path fillRule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"/>
                                </svg>
                            </a>
                        )}
                    </div>
                </div>
            </div>
        );
    };

    return (
        <section className="proyectos-seccion" id="proyectos" ref={sectionRef}>
            <div className="proyectos-container">
                <h2 className="titulo-proyectos">{language === 'es' ? 'Mis Proyectos' : 'My Projects'}</h2>
                
                <div className="descripcion-seccion">
                    <div className="nota-tecnica">
                        <p>{textoNota}</p>
                    </div>
                </div>

                <div className="filtros-proyectos" role="group" aria-label="Filtros">
                    {filtros.map((filtro) => (
                        <button
                            key={filtro.id}
                            type="button"
                            className={`filtro-proyecto ${filtroActivo === filtro.id ? 'activo' : ''}`}
                            onClick={() => setFiltroActivo(filtro.id)}
                        >
                            {language === 'es' ? filtro.es : filtro.en}
                            <span className="filtro-contador">
                                {filtro.id === 'todos'
                                    ? proyectosActuales.length
                                    : proyectosActuales.filter((p) => p.tipo === filtro.id).length}
                            </span>
                        </button>
                    ))}
                </div>

                {/* AVISO DE SWIPE EXCLUSIVO PARA MOBILE */}
                <div className="carousel-hint" role="status">
                    <span>{language === 'es' ? 'Deslizá para explorar los proyectos' : 'Swipe to explore projects'}</span>
                    <span className="carousel-hint-icon" aria-hidden="true">→</span>
                </div>

                {/* ── 1. VISTA DESKTOP (Estructura de 2 bloques jerárquicos) ── */}
                <div className="contenedor-desktop">
                    {(filtroActivo === 'todos' || filtroActivo === 'laboral') && proyectosLaborales.length > 0 && (
                        <div className="categoria-bloque">
                            {filtroActivo === 'todos' && (
                                <div className="categoria-header">
                                    <span className="categoria-subtitulo">💼 {language === 'es' ? 'Experiencia Laboral' : 'Work Experience'}</span>
                                </div>
                            )}
                            <div className="grid-destacados-horizontal">
                                {proyectosLaborales.map(p => renderCard(p, true))}
                            </div>
                        </div>
                    )}

                    {(filtroActivo === 'todos' || filtroActivo === 'personal') && proyectosPersonales.length > 0 && (
                        <div className="categoria-bloque">
                            {filtroActivo === 'todos' && (
                                <div className="categoria-header">
                                    <span className="categoria-subtitulo">🛠️ {language === 'es' ? 'Desarrollo Full Stack & Académicos' : 'Full Stack & Academic Projects'}</span>
                                </div>
                            )}
                            <div className="grid-secundaria-tres-columnas">
                                {proyectosPersonales.map(p => renderCard(p, false))}
                            </div>
                        </div>
                    )}
                </div>

                {/* ── 2. VISTA MOBILE (Un único carrusel continuo gobernado por el filtro) ── */}
                <div className="contenedor-mobile-carrusel">
                    {proyectosFiltrados.map(p => renderCard(p, p.tipo === 'laboral'))}
                </div>

            </div>
        </section>
    );
};

export default Proyectos;