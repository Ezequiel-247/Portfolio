import React from 'react';
import '../style/Educacion.css';
import { estudios } from '../data/estudios';

const Educacion = () => {


    return (
        <section className="educacion-container" id="educacion">
            <h2 className="titulo-seccion">Educación</h2>
            <div className="timeline">
                {estudios.map((estudio, index) => (
                    <div key={index} className="timeline-item">
                        <div className="timeline-dot"></div>
                        <div className="timeline-content">
                            <h3>{estudio.titulo}</h3>
                            <div className="institucion-container">
                                {estudio.logo && <img src={estudio.logo} alt={`Logo ${estudio.institucion}`} className="institucion-logo" loading="lazy" />}
                                <h4>{estudio.institucion}</h4>
                            </div>
                            <span className="estado">
                                {estudio.estado} {estudio.promedio && ` | ${estudio.promedio}`}
                            </span>
                            <p>{estudio.descripcion}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Educacion;