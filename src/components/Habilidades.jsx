import { useEffect, useMemo, useState } from 'react';
import { iconos, iconosMaterialSymbols, allSkills } from '../data/proyectos';
import '../style/Habilidades.css';
import { useLanguage } from '../context/LanguageContext';

const Habilidades = () => {
    const { language } = useLanguage();
    const [categoriaActiva, setCategoriaActiva] = useState('all');
    const [categoriasExpandidas, setCategoriasExpandidas] = useState({});

    // Agrupamos las habilidades por categoría para crear las columnas
    const skillsByCategory = useMemo(() => {
        const categories = {};
        // "Tools" (la categoría más corta) va en el medio, flanqueada por Frontend y Backend
        // (las más largas y de altura más pareja) para que el desnivel entre columnas se note menos.
        const categoryOrder = ["Frontend", "Tools", "Backend"];
        
        categoryOrder.forEach(cat => {
            const skills = allSkills.filter(skill => skill.category === cat);
            if (skills.length > 0) {
                categories[cat] = skills;
            }
        });

        return categories;
    }, []);

    // Información de traducción y los íconos de cabecera
    const categoryInfo = {
        es: {
            "Frontend": { title: "Frontend" },
            "Backend": { title: "Backend" },
            "Tools": { title: "Herramientas" }
        },
        en: {
            "Frontend": { title: "Frontend" },
            "Backend": { title: "Backend" },
            "Tools": { title: "Tools" }
        }
    };

    const categoriasFiltro = [
        { id: 'all', es: 'Todas', en: 'All' },
        { id: 'Frontend', es: 'Frontend', en: 'Frontend' },
        { id: 'Backend', es: 'Backend', en: 'Backend' },
        { id: 'Tools', es: 'Herramientas', en: 'Tools' }
    ];

    const categoriasVisibles = categoriaActiva === 'all'
        ? Object.entries(skillsByCategory)
        : Object.entries(skillsByCategory).filter(([category]) => category === categoriaActiva);

    const toggleCategoria = (category) => {
        setCategoriasExpandidas(prev => ({ ...prev, [category]: !prev[category] }));
    };

    useEffect(() => {
        setCategoriaActiva('all');
    }, [language]);

    return (
        <section className="habilidades-seccion" id="habilidades" aria-labelledby="habilidades-titulo">
            <div className="habilidades-container">
                <h2 id="habilidades-titulo" className="titulo-seccion">{language === 'es' ? 'Stack Tecnológico' : 'Tech Stack'}</h2>

                <div className="filtros-stack" role="group" aria-label={language === 'es' ? 'Filtrar stack tecnológico' : 'Filter tech stack'}>
                    {categoriasFiltro.map((filtro) => (
                        <button
                            key={filtro.id}
                            type="button"
                            className={`filtro-stack ${categoriaActiva === filtro.id ? 'activo' : ''}`}
                            aria-pressed={categoriaActiva === filtro.id}
                            onClick={() => setCategoriaActiva(filtro.id)}
                        >
                            {language === 'es' ? filtro.es : filtro.en}
                        </button>
                    ))}
                </div>
                
                <ul className="tech-stack-grid">
                    {categoriasVisibles.map(([category, skills]) => (
                        <li key={category} className="tech-category-group">
                            <div className="tech-category-header">
                                <h3 className="tech-category-title">
                                    {categoryInfo[language][category]?.title || category}
                                </h3>
                            </div>
                            
                            <ul className="tech-cards-container">
                                {(categoriasExpandidas[category] ? skills : skills.slice(0, 4)).map((skill, skillIndex) => {
                                    const iconoValor = iconos[skill.name] || 'code';
                                    const esImagen = !iconosMaterialSymbols.has(iconoValor);
                                    return (
                                        <li key={skillIndex} className={`tech-card ${skill.colorClass}`}>
                                            {esImagen ? (
                                                <img src={iconoValor} alt={`${skill.name} logo`} className="tech-card-logo" aria-hidden="true" />
                                            ) : (
                                                <span className="material-symbols-outlined tech-card-icon" aria-hidden="true">{iconoValor}</span>
                                            )}
                                            <div className="tech-card-content">
                                                <h4 className="tech-card-name">{skill.name}</h4>
                                                <div className="tech-card-tags">
                                                    {skill.subTags && skill.subTags.length > 0 ? (
                                                        skill.subTags.map((tag, i) => (
                                                            <span key={i} className="tech-tag-pill">{tag}</span>
                                                        ))
                                                    ) : (
                                                        <span className="tech-tag-pill">{skill.category}</span>
                                                    )}
                                                </div>
                                            </div>
                                        </li>
                                    );
                                })}
                            </ul>
                            {skills.length > 4 && (
                                <button
                                    type="button"
                                    className="toggle-skills-btn"
                                    onClick={() => toggleCategoria(category)}
                                    aria-expanded={Boolean(categoriasExpandidas[category])}
                                >
                                    {categoriasExpandidas[category]
                                        ? (language === 'es' ? 'Ver menos' : 'Show less')
                                        : (language === 'es' ? `Ver más (${skills.length - 4})` : `Show more (${skills.length - 4})`)}
                                    <span aria-hidden="true">{categoriasExpandidas[category] ? '↑' : '↓'}</span>
                                </button>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default Habilidades;