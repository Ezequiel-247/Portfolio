// Importamos las imágenes aquí para mantener el orden
import homeNetflixImg from '../img/home_netflix.png';
import unaHurImg from '../img/Anti-Social.png';
import intaImg from '../img/INTA.jpg';
import desarrolloAppImg from '../img/Desarrollo_App.png'; // Reemplaza esto con el nombre real de tu imagen

// Diccionario de íconos (URLs de Devicon)
export const iconos = {
    "Python": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    "Flask": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg",
    "MongoDB": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    "JavaScript": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    "TypeScript": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    "React": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    "Node.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    "Sequelize": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sequelize/sequelize-original.svg",
    "Sqlite": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg",
    "PostgreSQL": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
    "HTML5": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    "CSS": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    "Jinja": "https://cdn.simpleicons.org/jinja/B41717",
    "Docker": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    "Git": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    "GitHub": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    "Postman": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg",
    "Mongoose": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongoose/mongoose-original.svg",
    "IA & Prompting": "https://cdn.simpleicons.org/githubcopilot",
    "Tailwind CSS": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
    "Trello": "https://cdn.simpleicons.org/trello/0052CC"
};

export const habilidadesNiveles = {
    es: {
        "Backend & Base de Datos": [
            { nombre: "Python", etiqueta: "Producción — INTA" },
            { nombre: "Flask", etiqueta: "Producción — INTA" },
            { nombre: "MongoDB", etiqueta: "Producción — INTA" },
            { nombre: "Mongoose", etiqueta: "Modelado de datos ODM" },
            { nombre: "Node.js", etiqueta: "Proyectos full stack" },
            { nombre: "PostgreSQL", etiqueta: "Proyectos full stack" },
            { nombre: "Docker", etiqueta: "Nivel principiante" }
        ],
        "Frontend & Diseño": [
            { nombre: "React", etiqueta: "Proyectos full stack" },
            { nombre: "JavaScript", etiqueta: "Frontend y backend" },
            { nombre: "TypeScript", etiqueta: "Tipado estático" },
            { nombre: "HTML5", etiqueta: "Estructura web" },
            { nombre: "CSS", etiqueta: "Layouts responsive" },
            { nombre: "Tailwind CSS", etiqueta: "Diseño utility-first" },
            { nombre: "Jinja", etiqueta: "Producción — INTA" }
        ],
        "Herramientas & Metodologías": [
            { nombre: "Git", etiqueta: "Control de versiones" },
            { nombre: "GitHub", etiqueta: "Colaboración y repositorios" },
            { nombre: "Postman", etiqueta: "Testing de APIs" },
            { nombre: "Trello", etiqueta: "Gestión ágil (Kanban)" },
            { nombre: "IA & Prompting", etiqueta: "Productividad (Copilot/GPT)" }
        ]
    },
    en: {
        "Backend & Databases": [
            { nombre: "Python", etiqueta: "Production — INTA" },
            { nombre: "Flask", etiqueta: "Production — INTA" },
            { nombre: "MongoDB", etiqueta: "Production — INTA" },
            { nombre: "Mongoose", etiqueta: "ODM Data modeling" },
            { nombre: "Node.js", etiqueta: "Full stack projects" },
            { nombre: "PostgreSQL", etiqueta: "Full stack projects" },
            { nombre: "Docker", etiqueta: "Beginner level" }
        ],
        "Frontend & Design": [
            { nombre: "React", etiqueta: "Full stack projects" },
            { nombre: "JavaScript", etiqueta: "Frontend and backend" },
            { nombre: "TypeScript", etiqueta: "Static typing" },
            { nombre: "HTML5", etiqueta: "Web structure" },
            { nombre: "CSS", etiqueta: "Responsive layouts" },
            { nombre: "Tailwind CSS", etiqueta: "Utility-first design" },
            { nombre: "Jinja", etiqueta: "Production — INTA" }
        ],
        "Tools & Methodologies": [
            { nombre: "Git", etiqueta: "Version control" },
            { nombre: "GitHub", etiqueta: "Collaboration & repositories" },
            { nombre: "Postman", etiqueta: "API Testing" },
            { nombre: "Trello", etiqueta: "Agile management (Kanban)" },
            { nombre: "IA & Prompting", etiqueta: "Productivity (Copilot/GPT)" }
        ]
    }
};

export const descripcionProyectos = {
    es: {
        intro: "A continuación presento una selección de mis proyectos y mi experiencia laboral. " +
               "Estos trabajos demuestran mis habilidades técnicas en el desarrollo de soluciones web completas, " +
               "aplicando buenas prácticas y tecnologías modernas.",
        nota: "Nota técnica: Los proyectos están desplegados utilizando servicios gratuitos " +
              ",los cuales entran en estado de reposo tras un período de inactividad. Al abrir una demo por primera vez, " +
              "el servidor puede demorar hasta un minuto en 'despertar'. ¡Agradezco tu paciencia!"
    },
    en: {
        intro: "Below is a selection of my projects and work experience. " +
               "These works demonstrate my technical skills in developing complete web solutions, " +
               "applying best practices and modern technologies.",
        nota: "Technical note: The projects are deployed using free services " +
              "that enter sleep mode after a period of inactivity. When opening a demo for the first time, " +
              "the server may take up to a minute to 'wake up'. I appreciate your patience!"
    }
};

export const listaProyectos = {
    es: [
    {
       titulo: "Sistema de gestión hídrica — INTA",
        tipo: "laboral",
        imagen: intaImg,
        esFoto: true,
        descripcion: 
            "Durante mi experiencia en INTA, desarrollé un producto de software Backend diseñado para la " +
            "gestión, procesamiento y visualización de datos provenientes de freatígrafos y limnígrafos. " +
            "Implementé una arquitectura estructurada con el siguiente starck tecnológico a pedido del cliente:  Flask, Python, " +
            "JavaScript, Jinja2 (HTML5 que viene por defecto con Flask) y utilizamos MongoDb como base de datos no relacional " +
            "para organizar y filtrar la información de manera eficiente, " +
            "permitiendo el manejo de grandes volúmenes de información capturada por medidores de aguas subterráneas. " +
            "Asimismo, diseñé módulos de exportación (PDF/Excel) y herramientas de graficación, optimizando el " +
            "análisis técnico realizado por los ingenieros del Instituto de Clima y Agua. Para completar el ecosistema, " +
            "desarrollé una interfaz de consulta mediante una tabla dinámica que permitía la visualización y descarga " +
            "de registros en tiempo real, interactuando directamente con el Backend a través de peticiones optimizadas. " +
            "Por terminos de contratos y confidencialidad no puedo compartir el código ni el repositorio de este proyecto, " +
            "pero estoy disponible para discutir los detalles técnicos y la arquitectura implementada en entrevistas o reuniones técnicas.",
        referencia:{
            Nombre: "Sofía Havrylenko",
            Puesto: "Ingeniera en INTA",
            Contacto: "+5491169528278"
        },
        tecnologias: {
            frontend: ["Jinja", "CSS"],
            backend: ["JavaScript","Node.js", "Python", "Flask", "MongoDB"]
        },
    },
    {
        titulo: "Plataforma de streaming — Full Stack",
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
    {
        titulo: "Sistema de Acompañamiento de Alumnos Universitarios",
        imagen: desarrolloAppImg,
        descripcion: 
            "Proyecto integrador final para la materia Desarrollo de Aplicaciones en la UNAHUR. " +
            "Consiste en el diseño e implementación de una solución web Full Stack escalable. " +
            "Durante su ciclo de vida se aplican metodologías ágiles (Scrum), control de versiones " +
            "colaborativo y buenas prácticas de arquitectura de software. Actualmente se encuentra " +
            "en fase de desarrollo, enfocándonos en un backend robusto y una interfaz intuitiva.",
        tecnologias: {
            frontend: ["React", "TypeScript", "CSS", "Tailwind CSS"],
            backend: ["Node.js", "PostgreSQL", "Docker", "Git"]
        },
        enDesarrollo: true
    }
    ],
    en: [
        {
            titulo: "Water Management System — INTA",
            tipo: "laboral",
            imagen: intaImg,
            esFoto: true,
            descripcion: 
                "During my experience at INTA, I developed a Backend software product designed for the " +
                "management, processing, and visualization of data from phreatigraphs and limnigraphs. " +
                "I implemented a structured architecture with the following tech stack at the client's request: Flask, Python, " +
                "JavaScript, Jinja2 (default HTML5 with Flask), and we used MongoDB as a non-relational database " +
                "to organize and filter information efficiently, " +
                "allowing the handling of large volumes of information captured by groundwater meters. " +
                "Additionally, I designed export modules (PDF/Excel) and graphing tools, optimizing the " +
                "technical analysis performed by the engineers of the Institute of Climate and Water. To complete the ecosystem, " +
                "I developed a query interface using a dynamic table that allowed the visualization and download " +
                "of records in real time, interacting directly with the Backend through optimized requests. " +
                "Due to contract terms and confidentiality, I cannot share the code or repository for this project, " +
                "but I am available to discuss the technical details and architecture implemented in interviews or technical meetings.",
            referencia:{
                Nombre: "Sofía Havrylenko",
                Puesto: "Engineer at INTA",
                Contacto: "+5491169528278"
            },
            tecnologias: {
                frontend: ["Jinja", "CSS"],
                backend: ["JavaScript","Node.js", "Python", "Flask", "MongoDB"]
            },
        },
        {
            titulo: "Streaming Platform — Full Stack",
            imagen: homeNetflixImg,
            descripcion: 
                "This project is a simulation of the Netflix user experience, " +
                "developed as a Full Stack application. The platform allows user registration, " +
                "management of multiple profiles (up to 3), and exploration of a " +
                "dynamic catalog preloaded with 50 titles. In addition, it integrates the YouTube API " +
                "to play real trailers when interacting with series and movies.",
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
                "Interactive platform developed for UNAHUR that allows users " +
                "to share content, comment, and react. It implements a robust architecture " +
                "with security validations and data persistence.",
            tecnologias: {
                frontend: ["React", "CSS"],
                backend: ["JavaScript","Node.js", "Sequelize", "PostgreSQL"]
            },
            repo: "https://github.com/Ezequiel-247/Red-Anti-Social-Unahur",
            demo: "https://red-anti-social-front.onrender.com/"
        },
        {
            titulo: "University Student Support System",
            imagen: desarrolloAppImg,
            descripcion: 
                "Final integrative project for the Application Development subject at UNAHUR. " +
                "It consists of the design and implementation of a scalable Full Stack web solution. " +
                "Throughout its lifecycle, agile methodologies (Scrum), collaborative version control, " +
                "and software architecture best practices are applied. It is currently " +
                "in the development phase, focusing on a robust backend and an intuitive interface.",
            tecnologias: {
                frontend: ["React", "TypeScript", "CSS", "Tailwind CSS"],
                backend: ["Node.js", "PostgreSQL", "Docker", "Git"]
            },
            enDesarrollo: true
        }
    ]
};
