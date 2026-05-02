import React from 'react';
import '../style/Educacion.css';
import { estudios } from '../data/estudios';
import { useLanguage } from '../context/LanguageContext';

const Educacion = () => {
    const { language } = useLanguage();
    
    const estudiosActuales = estudios[language] || estudios;

    return (
        <section className="educacion-seccion" id="educacion">
            <div className="educacion-container">
                <h2 className="titulo-seccion">{language === 'es' ? 'Educación' : 'Education'}</h2>
                <div className="timeline">
                    {estudiosActuales.map((estudio, index) => (
                        <div key={index} className="timeline-item">
                            <div className="timeline-dot"></div>
                            <div className="timeline-content">
                                <h3>{estudio.titulo}</h3>
                                <div className="institucion-container">
                                    {estudio.logo && <img src={estudio.logo} alt={`Logo ${estudio.institucion}`} className="institucion-logo" loading="lazy" />}
                                    <h4>{estudio.institucion}</h4>
                                </div>
                                <span className={`estado ${estudio.estadoId === 'graduado' ? 'badge-graduado' : 'badge-en-curso'}`}>
                                    {estudio.estado} {estudio.promedio && `| ${estudio.promedio}`}
                                </span>
                                <p>{estudio.descripcion}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Educacion;