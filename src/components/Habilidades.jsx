import React from 'react';
import { iconos, habilidadesNiveles } from '../data/proyectos';
import '../style/Habilidades.css';
import { useLanguage } from '../context/LanguageContext';

const Habilidades = () => {
    const { language } = useLanguage();
    const habilidadesActuales = habilidadesNiveles[language];

    return (
        <section className="habilidades-seccion" id="habilidades">
            <div className="habilidades-container">
                <h2 className="titulo-seccion">{language === 'es' ? 'Stack Tecnológico' : 'Tech Stack'}</h2>
                <div className="habilidades-categorias">
                    {Object.entries(habilidadesActuales).map(([categoria, skills]) => (
                        <div key={categoria} className="categoria-card">
                            <h3 className="categoria-titulo">{categoria}</h3>
                            <div className="skills-list">
                                {skills.map((skill) => (
                                    <div key={skill.nombre} className="skill-item">
                                        <div className="skill-info">
                                            {iconos[skill.nombre] && <img src={iconos[skill.nombre]} alt={skill.nombre} className="skill-icon" loading="lazy" />}
                                            <span className="skill-name">{skill.nombre}</span>
                                            <span className="skill-tag">{skill.etiqueta}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Habilidades;