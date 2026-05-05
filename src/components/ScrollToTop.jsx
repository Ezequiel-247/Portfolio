import { useState, useEffect } from 'react';

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Muestra el botón cuando se scrollea hacia abajo
    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    // Función para volver a la sección anterior
    const scrollToPrevious = () => {
        // Buscamos todos los contenedores principales
        const elements = document.querySelectorAll('main, section, footer');
        const sections = Array.from(elements);
        const currentScroll = window.scrollY;

        // Recorremos de abajo hacia arriba buscando la primera sección que esté por encima de donde estamos
        for (let i = sections.length - 1; i >= 0; i--) {
            const sectionTop = sections[i].getBoundingClientRect().top + window.scrollY;
            
            // Margen de 100px para asegurarnos de que la sección está realmente "arriba"
            if (sectionTop < currentScroll - 100) {
                window.scrollTo({
                    top: sectionTop - 64, // Descontamos 64px para que el menú de navegación no tape el título
                    behavior: 'smooth',
                });
                return;
            }
        }
        // Fallback por si no encuentra, vamos al tope de la página
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <button onClick={scrollToPrevious} className={`btn-scroll-top ${isVisible ? 'visible' : ''}`} aria-label="Volver a la sección anterior" title="Sección Anterior">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M8 12a.5.5 0 0 0 .5-.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 .5.5z"/>
            </svg>
        </button>
    );
};

export default ScrollToTop;