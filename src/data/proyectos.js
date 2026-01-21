// Importamos las imágenes aquí para mantener el orden
import homeNetflixImg from '../img/home_netflix.png';

// Diccionario de íconos (URLs de Devicon)
export const iconos = {
    "Python": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    "Flask": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg",
    "MongoDB": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    "JavaScript": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    "React": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    "Node.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    "Sequelize": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sequelize/sequelize-original.svg",
    "Sqlite": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg",
    "CSS": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
};

export const listaProyectos = [
    {
        titulo: "Netflix Clone - Full Stack",
        imagen: homeNetflixImg,
        descripcion: "Este proyecto es una simulación de la experiencia de usuario de Netflix, desarrollada como una aplicación Full Stack. La plataforma permite el registro de usuarios, gestión de múltiples perfiles (hasta 3) y la exploración de un catálogo dinámico.",
        tecnologias: {
            frontend: ["React", "CSS"],
            backend: ["JavaScript","Node.js", "Sequelize", "Sqlite"]
        },
        repo: "https://github.com/Ezequiel-247/App-de-Series-estilo-NETFLIX",
        demo: "https://app-de-series-estilo-netflix-front.onrender.com"
    }
];
