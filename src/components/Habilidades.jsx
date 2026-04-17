import React from 'react';
import { iconos } from '../data/proyectos';
import '../style/Habilidades.css';

const Habilidades = () => {
    return (
        <section className="habilidades-container" id="habilidades">
            <h2 className="titulo-seccion">Stack Tecnológico</h2>
            <div className="habilidades-grid">
                {Object.entries(iconos).map(([nombre, url]) => (
                    <div key={nombre} className="habilidad-card">
                        <img src={url} alt={nombre} className="habilidad-icono" loading="lazy" />
                        <span>{nombre}</span>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Habilidades;