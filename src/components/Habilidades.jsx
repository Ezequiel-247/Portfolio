import { useMemo } from 'react';
import { iconos, allSkills } from '../data/proyectos';
import '../style/Habilidades.css';
import { useLanguage } from '../context/LanguageContext';

const Habilidades = () => {
    const { language } = useLanguage();

    // Agrupamos las habilidades por categoría para crear las columnas
    const skillsByCategory = useMemo(() => {
        const categories = {};
        const categoryOrder = ["Frontend", "Backend", "Tools"]; // Reducido a 3 pilares
        
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

    return (
        <section className="habilidades-seccion" id="habilidades" aria-labelledby="habilidades-titulo">
            <div className="habilidades-container">
                <h2 id="habilidades-titulo" className="titulo-seccion">{language === 'es' ? 'Stack Tecnológico' : 'Tech Stack'}</h2>
                
                <ul className="tech-stack-grid">
                    {Object.entries(skillsByCategory).map(([category, skills]) => (
                        <li key={category} className="tech-category-group">
                            <div className="tech-category-header">
                                <h3 className="tech-category-title">
                                    {categoryInfo[language][category]?.title || category}
                                </h3>
                            </div>
                            
                            <ul className="tech-cards-container">
                                {skills.map((skill, skillIndex) => {
                                    const iconoValor = iconos[skill.name] || 'code';
                                    const esImagen = iconoValor.startsWith('http');
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
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default Habilidades;