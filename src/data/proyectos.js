// Importamos las imágenes aquí para mantener el orden
import homeNetflixImg from '../img/home_netflix.png';
import unaHurImg from '../img/Anti-Social.png';
import intaImg from '../img/INTA.jpg';
import desarrolloAppImg from '../img/Desarrollo_App.png'; // Reemplaza esto con el nombre real de tu imagen

// Diccionario de íconos (URLs de Devicon)
export const iconos = {
    "Python": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
    "Flask": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original.svg",
    "MongoDB": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
    "JavaScript": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
    "TypeScript": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
    "React": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
    "Node.js": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
    "Sequelize": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sequelize/sequelize-original.svg",
    "Sqlite": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqlite/sqlite-original.svg",
    "PostgreSQL": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
    "HTML5": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
    "CSS": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
    "Jinja": "https://cdn.simpleicons.org/jinja/white",
    "Docker": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",
    "Git": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
    "GitHub": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
    "Postman": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg",
    "Mongoose": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongoose/mongoose-original.svg",
    "Tailwind CSS": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
    "Trello": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/trello/trello-plain.svg",
    "MySQL": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg",
    "Bootstrap": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg",
    "bolt": "bolt", // For Query Optimization
    "cloud_sync": "cloud_sync", // Para DevOps
    "hub": "hub", // Para GraphQL
    "security": "security" // For Data Integrity
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
            { nombre: "Bootstrap", etiqueta: "Framework CSS" }, 
            { nombre: "Jinja", etiqueta: "Producción — INTA" } 
        ],
        "Herramientas & Metodologías": [
            { nombre: "Git", etiqueta: "Control de versiones" },
            { nombre: "GitHub", etiqueta: "Colaboración y repositorios" },
            { nombre: "Postman", etiqueta: "Testing de APIs" },
            { nombre: "Trello", etiqueta: "Gestión ágil (Kanban)" },
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
            { nombre: "Bootstrap", etiqueta: "CSS Framework" }, 
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

// Nueva estructura de datos para las habilidades, adaptada al nuevo diseño de tarjetas
export const allSkills = [
    // ==========================================
    // FRONTEND
    // ==========================================
    {
        name: "React",
        description: "Building immersive, state-driven interfaces with component-based architecture and optimized rendering cycles.",
        description_es: "Construcción de interfaces inmersivas y reactivas con arquitectura basada en componentes y ciclos de renderizado optimizados.",
        etiqueta_en: "Full stack projects",
        etiqueta_es: "Proyectos full stack",
        category: "Frontend",
        subTags: ["Hooks", "Next.js", "Redux"],
        colorClass: "tech-card-blue"
    },
    {
        name: "JavaScript",
        description: "Core language for interactive web experiences.",
        description_es: "Lenguaje principal para experiencias web interactivas.",
        etiqueta_en: "Frontend and backend",
        etiqueta_es: "Frontend y backend",
        category: "Frontend",
        subTags: ["ES6+", "DOM", "Async"],
        colorClass: "tech-card-orange"
    },
    {
        name: "TypeScript",
        description: "Adding rigorous type safety to ensure large-scale application stability and superior developer experience.",
        description_es: "Incorporación de tipado estricto para garantizar la estabilidad de aplicaciones a gran escala y una experiencia de desarrollo superior.",
        etiqueta_en: "Static typing",
        etiqueta_es: "Tipado estático",
        category: "Frontend",
        subTags: ["Static Analysis", "Generics", "OOP"],
        colorClass: "tech-card-cyan"
    },
    {
        name: "HTML5",
        description: "Semantic structure for accessible web content.",
        description_es: "Estructura semántica para contenido web accesible.",
        etiqueta_en: "Web structure",
        etiqueta_es: "Estructura web",
        category: "Frontend",
        subTags: ["Semantics", "A11y", "SEO"],
        colorClass: "tech-card-orange"
    },
    {
        name: "CSS",
        description: "Styling and responsive layouts for modern web applications.",
        description_es: "Estilizado y layouts responsive para aplicaciones web modernas.",
        etiqueta_en: "Responsive layouts",
        etiqueta_es: "Layouts responsive",
        category: "Frontend",
        subTags: ["Flexbox", "Grid", "Animations"],
        colorClass: "tech-card-blue"
    },
    {
        name: "Tailwind CSS",
        description: "Utility-first styling approach for rapid UI development and maintainable design systems at scale.",
        description_es: "Enfoque de estilos 'utility-first' para un desarrollo rápido de UI y sistemas de diseño mantenibles a escala.",
        etiqueta_en: "Utility-first design",
        etiqueta_es: "Diseño utility-first",
        category: "Frontend",
        subTags: ["JIT Engine", "Responsive"],
        colorClass: "tech-card-cyan"
    },
    {
        name: "Jinja",
        description: "Templating engine for Python web frameworks.",
        description_es: "Motor de plantillas para frameworks web de Python.",
        etiqueta_en: "Production — INTA",
        etiqueta_es: "Producción — INTA",
        category: "Frontend",
        subTags: ["Templates", "Flask"],
        colorClass: "tech-card-purple"
    },
    {
        name: "Bootstrap",
        description: "Powerful, extensible, and feature-packed frontend toolkit for rapid UI development.",
        description_es: "Potente y extenso toolkit frontend para el diseño rápido y personalización de interfaces.",
        etiqueta_en: "CSS Framework",
        etiqueta_es: "Framework CSS",
        category: "Frontend",
        subTags: ["Responsive", "Components", "Grid"],
        colorClass: "tech-card-purple"
    },
    
    // ==========================================
    // BACKEND
    // ==========================================
    {
        name: "Node.js",
        description: "Asynchronous event-driven runtime engineered for high-concurrency microservices and real-time data streaming.",
        description_es: "Entorno de ejecución asíncrono y orientado a eventos, diseñado para microservicios de alta concurrencia y streaming de datos en tiempo real.",
        etiqueta_en: "Full stack projects",
        etiqueta_es: "Proyectos full stack",
        category: "Backend",
        subTags: ["Express", "Fastify", "Socket.io"],
        colorClass: "tech-card-green"
    },
    {
        name: "Python",
        description: "Versatile language for backend logic and data processing.",
        description_es: "Lenguaje versátil para lógica backend y procesamiento de datos.",
        etiqueta_en: "Production — INTA",
        etiqueta_es: "Producción — INTA",
        category: "Backend",
        subTags: ["Scripts", "Data", "APIs"],
        colorClass: "tech-card-blue"
    },
    {
        name: "Flask",
        description: "Lightweight WSGI web application framework for Python.",
        description_es: "Framework de aplicaciones web WSGI ligero para Python.",
        etiqueta_en: "Production — INTA",
        etiqueta_es: "Producción — INTA",
        category: "Backend",
        subTags: ["Routing", "Microservices"],
        colorClass: "tech-card-cyan"
    },
    {
        name: "PostgreSQL",
        description: "Advanced relational database providing ACID compliance and robust performance for complex data relationships and heavy transaction volumes.",
        description_es: "Base de datos relacional avanzada que ofrece cumplimiento ACID y un rendimiento robusto para relaciones de datos complejas y grandes volúmenes de transacciones.",
        etiqueta_en: "Full stack projects",
        etiqueta_es: "Proyectos full stack",
        category: "Backend",
        subTags: ["Query Optimization", "Data Integrity"],
        colorClass: "tech-card-blue"
    },
    {
        name: "MongoDB",
        description: "NoSQL document database for scalable and flexible data storage.",
        description_es: "Base de datos documental NoSQL para almacenamiento escalable y flexible.",
        etiqueta_en: "Production — INTA",
        etiqueta_es: "Producción — INTA",
        category: "Backend",
        subTags: ["NoSQL", "Aggregation", "Scale"],
        colorClass: "tech-card-green"
    },
    {
        name: "Mongoose",
        description: "Elegant MongoDB object modeling for Node.js.",
        description_es: "Modelado elegante de objetos MongoDB para Node.js.",
        etiqueta_en: "ODM Data modeling",
        etiqueta_es: "Modelado de datos ODM",
        category: "Backend",
        subTags: ["ODM", "Schemas", "Validation"],
        colorClass: "tech-card-purple"
    },
    {
        name: "MySQL",
        description: "Open-source relational database management system.",
        description_es: "Sistema de gestión de bases de datos relacional de código abierto.",
        etiqueta_en: "Relational databases",
        etiqueta_es: "Bases de datos relacionales",
        category: "Backend",
        subTags: ["Relational", "SQL", "Databases"],
        colorClass: "tech-card-blue"
    },
    // ==========================================
    // HERRAMIENTAS / TOOLS
    // ==========================================
    {
        name: "Docker",
        description: "Containerization for consistent environments across development, staging, and production cycles.",
        description_es: "Contenerización para entornos consistentes a través de los ciclos de desarrollo, staging y producción.",
        etiqueta_en: "Beginner level",
        etiqueta_es: "Nivel principiante",
        category: "Tools",
        subTags: ["Containers", "Orchestration"],
        colorClass: "tech-card-purple"
    },
    {
        name: "Git",
        description: "Distributed version control system for tracking changes in source code during software development.",
        description_es: "Sistema de control de versiones distribuido para rastrear cambios en el código fuente durante el desarrollo de software.",
        etiqueta_en: "Version control",
        etiqueta_es: "Control de versiones",
        category: "Tools",
        subTags: ["Commits", "Branches"],
        colorClass: "tech-card-green"
    },
    {
        name: "GitHub",
        description: "Web-based platform for version control and collaboration, hosting Git repositories.",
        description_es: "Plataforma web para control de versiones y colaboración, que aloja repositorios Git.",
        etiqueta_en: "Collaboration & repositories",
        etiqueta_es: "Colaboración y repositorios",
        category: "Tools",
        subTags: ["Repositories", "PRs"],
        colorClass: "tech-card-blue"
    },
    {
        name: "Postman",
        description: "API platform for building, testing, and modifying APIs.",
        description_es: "Plataforma API para construir, probar y modificar APIs.",
        etiqueta_en: "API Testing",
        etiqueta_es: "Testing de APIs",
        category: "Tools",
        subTags: ["Requests", "Collections"],
        colorClass: "tech-card-purple"
    },
    {
        name: "Trello",
        description: "Visual tool for organizing tasks and agile project management.",
        description_es: "Herramienta visual para organizar tareas y gestión ágil de proyectos.",
        etiqueta_en: "Agile management (Kanban)",
        etiqueta_es: "Gestión ágil (Kanban)",
        category: "Tools",
        subTags: ["Kanban", "Scrum", "Agile"],
        colorClass: "tech-card-blue"
    }
];

export const notaTecnica = {
    es: "Nota técnica: Los proyectos están desplegados utilizando servicios gratuitos, los cuales entran en estado de reposo tras un período de inactividad. Al abrir una demo por primera vez, el servidor puede demorar hasta un minuto en 'despertar'. ¡Agradezco tu paciencia!",
    en: "Technical note: The projects are deployed using free services that enter sleep mode after a period of inactivity. When opening a demo for the first time, the server may take up to a minute to 'wake up'. I appreciate your patience!"
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
