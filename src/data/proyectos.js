// Importamos las imágenes aquí para mantener el orden
import homeNetflixImg from '../img/home_netflix.png';
import unaHurImg from '../img/Anti-Social.png';
import intaImg from '../img/Logo_INTA.png';

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
    "PostgreSQL": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
    "CSS": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    "Jinja": "https://cdn.simpleicons.org/jinja/B41717"
};

export const listaProyectos = [
    {
       titulo: "INTA - Desarrollo Backend",
        imagen: intaImg,
        descripcion: 
            "Durante mi experiencia en el INTA, desarrollé un producto de software Backend diseñada para la " +
            "gestión, procesamiento y visualización de datos provenientes de freatígrafos y limnígrafos. " +
            "Implementé MongoDB para estructurar y filtrar datos no relacionales de manera eficiente, " +
            "permitiendo el manejo de grandes volúmenes de información capturada por medidores de aguas subterráneas. " +
            "Asimismo, diseñé módulos de exportación (PDF/Excel) y herramientas de graficación, optimizando el " +
            "análisis técnico realizado por los ingenieros del Instituto de Clima y Agua. Para completar el ecosistema, " +
            "desarrollé una interfaz de consulta mediante una tabla dinámica que permitía la visualización y descarga " +
            "de registros en tiempo real, interactuando directamente con el Backend a través de peticiones optimizadas.",
        tecnologias: {
            frontend: ["Jinja", "CSS"],
            backend: ["JavaScript","Node.js", "Python", "Flask", "MongoDB"]
        },
    },
    {
        titulo: "Netflix Clone - Full Stack",
        imagen: homeNetflixImg,
        descripcion: 
            "Este proyecto es una simulación de la experiencia de usuario de Netflix, " +
            "desarrollada como una aplicación Full Stack. La plataforma permite el registro " +
            "de usuarios, la gestión de múltiples perfiles (hasta 3) y la exploración de un " +
            "catálogo dinámico precargado con 50 títulos. Además, integra la API de YouTube " +
            "para reproducir los tráilers reales al interactuar con las series y películas.",
        tecnologias: {
            frontend: ["React", "CSS"],
            backend: ["JavaScript","Node.js", "Sequelize", "Sqlite"]
        },
        repo: "https://github.com/Ezequiel-247/App-de-Series-estilo-NETFLIX",
        demo: "https://app-de-series-estilo-netflix-front.onrender.com"
    },
    {
        titulo: "UnaHur - Anti Social",
        imagen: unaHurImg,
        descripcion: 
            "Plataforma interactiva desarrollada para la UNAHUR que permite a los usuarios " +
            "compartir contenido, comentar y reaccionar. Implementa una arquitectura robusta " +
            "con validaciones de seguridad y persistencia de datos.",
        tecnologias: {
            frontend: ["React", "CSS"],
            backend: ["JavaScript","Node.js", "Sequelize", "PostgreSQL"]
        },
        repo: "https://github.com/Ezequiel-247/Red-Anti-Social-Unahur",
        demo: "https://red-anti-social-front.onrender.com/"
    },
];
