import { useState, useEffect } from 'react';

export const useTheme = () => {
    // Inicializar el estado leyendo el localStorage
    const [darkMode, setDarkMode] = useState(() => {
        return localStorage.getItem('theme') !== 'light';
    });

    // Efecto para cambiar la clase del body cuando darkMode cambia
    useEffect(() => {
        if (darkMode) {
            document.body.classList.remove('light-mode');
        } else {
            document.body.classList.add('light-mode');
        }
    }, [darkMode]);

    const toggleTheme = () => {
        const newMode = !darkMode;
        setDarkMode(newMode);
        localStorage.setItem('theme', newMode ? 'dark' : 'light');
    };

    return { darkMode, toggleTheme };
};