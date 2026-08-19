// Importamos las imágenes aquí para mantener el orden
import homeNetflixImg from '../img/home_netflix.webp';
import unaHurImg from '../img/Anti-Social.webp';
import intaImg from '../img/INTA.webp';
import desarrolloAppImg from '../img/Desarrollo_App.webp';

// Íconos de tecnologías: antes se pedían a una CDN externa (jsdelivr/simpleicons) en cada
// carga de página. Ahora viven en src/img/icons y Vite los empaqueta con el resto del sitio,
// así el sitio no depende de que un tercero esté online para mostrarlos.
import pythonIcon from '../img/icons/python.svg';
import flaskIcon from '../img/icons/flask.svg';
import mongodbIcon from '../img/icons/mongodb.svg';
import javascriptIcon from '../img/icons/javascript.svg';
import typescriptIcon from '../img/icons/typescript.svg';
import reactIcon from '../img/icons/react.svg';
import nodejsIcon from '../img/icons/nodejs.svg';
import sequelizeIcon from '../img/icons/sequelize.svg';
import sqliteIcon from '../img/icons/sqlite.svg';
import postgresqlIcon from '../img/icons/postgresql.svg';
import html5Icon from '../img/icons/html5.svg';
import css3Icon from '../img/icons/css3.svg';
import jinjaIcon from '../img/icons/jinja.svg';
import dockerIcon from '../img/icons/docker.svg';
import gitIcon from '../img/icons/git.svg';
import githubIcon from '../img/icons/github.svg';
import postmanIcon from '../img/icons/postman.svg';
import mongooseIcon from '../img/icons/mongoose.svg';
import tailwindcssIcon from '../img/icons/tailwindcss.svg';
import trelloIcon from '../img/icons/trello.svg';
import mysqlIcon from '../img/icons/mysql.svg';
import bootstrapIcon from '../img/icons/bootstrap.svg';
import swaggerIcon from '../img/icons/swagger.svg';

// Diccionario de íconos
export const iconos = {
    "Python": pythonIcon,
    "Flask": flaskIcon,
    "MongoDB": mongodbIcon,
    "JavaScript": javascriptIcon,
    "TypeScript": typescriptIcon,
    "React": reactIcon,
    "Node.js": nodejsIcon,
    "Sequelize": sequelizeIcon,
    "Sqlite": sqliteIcon,
    "PostgreSQL": postgresqlIcon,
    "HTML5": html5Icon,
    "CSS": css3Icon,
    "Jinja": jinjaIcon,
    "Docker": dockerIcon,
    "Git": gitIcon,
    "GitHub": githubIcon,
    "Postman": postmanIcon,
    "Mongoose": mongooseIcon,
    "SQLite": sqliteIcon,
    "Tailwind CSS": tailwindcssIcon,
    "Trello": trelloIcon,
    "MySQL": mysqlIcon,
    "Bootstrap": bootstrapIcon,
    "bolt": "bolt", // For Query Optimization
    "cloud_sync": "cloud_sync", // Para DevOps
    "hub": "hub", // Para GraphQL
    "security": "security", // For Data Integrity
    "IA & Prompting": "auto_awesome",
    "Render": "cloud",
    "Vercel": "deployed_code",
    "Supabase / Neon": "database",
    "Swagger": swaggerIcon
};

// Claves de "iconos" que en realidad son nombres de Material Symbols, no imágenes.
// Se usa para decidir <img> vs <span class="material-symbols-outlined"> sin depender
// de que el valor "empiece con http" (ya no aplica: los logos ahora son imports locales).
export const iconosMaterialSymbols = new Set([
    "bolt", "cloud_sync", "hub", "security", "code", "auto_awesome", "cloud", "deployed_code", "database", "description"
]);

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
            { nombre: "IA & Prompting", etiqueta: "Productividad y asistencia de código" },
            { nombre: "Render", etiqueta: "Despliegue de aplicaciones" },
            { nombre: "Supabase / Neon", etiqueta: "Backend y base de datos" },
            { nombre: "Swagger", etiqueta: "Documentación de APIs" },
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
            { nombre: "IA & Prompting", etiqueta: "Productivity (Copilot/GPT)" },
            { nombre: "Render", etiqueta: "Application deployment" },
            { nombre: "Supabase / Neon", etiqueta: "Backend and database" },
            { nombre: "Swagger", etiqueta: "API documentation" }
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
        description: "Core language for backend services, APIs, and asynchronous application logic with Node.js.",
        description_es: "Lenguaje base para servicios backend, APIs y lógica asíncrona de aplicaciones con Node.js.",
        etiqueta_en: "Backend development",
        etiqueta_es: "Desarrollo backend",
        category: "Backend",
        subTags: ["Node.js", "Express", "Async"],
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
        name: "Sequelize",
        description: "Object-relational mapping for building Node.js applications with relational databases.",
        description_es: "Mapeo objeto-relacional para construir aplicaciones Node.js con bases de datos relacionales.",
        etiqueta_en: "ORM for Node.js",
        etiqueta_es: "ORM para Node.js",
        category: "Backend",
        subTags: ["ORM", "Models", "Migrations"],
        colorClass: "tech-card-orange"
    },
    {
        name: "SQLite",
        description: "Lightweight relational database used for local and self-contained application persistence.",
        description_es: "Base de datos relacional liviana para persistencia local y aplicaciones autocontenidas.",
        etiqueta_en: "Relational database",
        etiqueta_es: "Base de datos relacional",
        category: "Backend",
        subTags: ["SQL", "Local", "Embedded"],
        colorClass: "tech-card-blue"
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
    },
    {
        name: "IA & Prompting",
        description: "AI-assisted workflows for research, ideation, documentation, and development productivity.",
        description_es: "Flujos de trabajo asistidos por IA para investigación, ideación, documentación y productividad en desarrollo.",
        etiqueta_en: "Productivity (Copilot/GPT)",
        etiqueta_es: "Productividad (Copilot/GPT)",
        category: "Tools",
        subTags: ["Copilot", "GPT", "Workflows"],
        colorClass: "tech-card-cyan"
    },
    {
        name: "Render",
        description: "Cloud platform used to deploy and publish full stack applications.",
        description_es: "Plataforma cloud utilizada para desplegar y publicar aplicaciones full stack.",
        etiqueta_en: "Application deployment",
        etiqueta_es: "Despliegue de aplicaciones",
        category: "Tools",
        subTags: ["Deploy", "Web Services", "Cloud"],
        colorClass: "tech-card-green"
    },
    {
        name: "Supabase / Neon",
        description: "Backend platform providing hosted PostgreSQL databases and application services.",
        description_es: "Plataforma backend con bases de datos PostgreSQL alojadas y servicios para aplicaciones.",
        etiqueta_en: "Backend and database",
        etiqueta_es: "Backend y base de datos",
        category: "Tools",
        subTags: ["PostgreSQL", "Auth", "Storage"],
        colorClass: "tech-card-green"
    },
    {
        name: "Swagger",
        description: "API documentation and testing workflow based on the OpenAPI specification.",
        description_es: "Flujo de documentación y prueba de APIs basado en la especificación OpenAPI.",
        etiqueta_en: "API documentation",
        etiqueta_es: "Documentación de APIs",
        category: "Tools",
        subTags: ["OpenAPI", "Endpoints", "Testing"],
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
            "gestión, procesamiento y visualización de datos provenientes de freatígrafos y limnígrafos.\n\n" +
            "• Stack a pedido del cliente: Flask, Python, JavaScript y Jinja2, con MongoDB como base no relacional para organizar grandes volúmenes de datos de medidores de aguas subterráneas.\n" +
            "• Módulos de exportación (PDF/Excel) y herramientas de graficación para optimizar el análisis técnico de los ingenieros del Instituto de Clima y Agua.\n" +
            "• Interfaz de consulta con tabla dinámica para visualizar y descargar registros en tiempo real.\n\n" +
            "Por términos de contrato y confidencialidad no puedo compartir el código, pero puedo discutir la arquitectura en una entrevista técnica.",
        referencia:{
            Nombre: "Sofía Havrylenko",
            Puesto: "Ingeniera en INTA",
            Contacto: "+5491169528278"
        },
        video: "https://www.youtube.com/watch?v=bGe9rUW3NF0",
        tecnologias: {
            frontend: ["Jinja", "CSS"],
            backend: ["JavaScript","Node.js", "Python", "Flask", "MongoDB"]
        },
    },
    {
        titulo: "Sistema de Acompañamiento de Alumnos Universitarios",
        tipo: "personal",
        imagen: desarrolloAppImg,
        descripcion:
            "Proyecto integrador final para la materia Desarrollo de Aplicaciones en la UNAHUR. " +
            "Consiste en el diseño e implementación de una solución web Full Stack escalable, " +
            "aplicando metodologías ágiles (Scrum) con gestión de tareas en Trello, control de " +
            "versiones colaborativo en GitHub y buenas prácticas de arquitectura de software, " +
            "con foco en un backend robusto y una interfaz intuitiva.\n\n" +
            "Podés probar la demo con el usuario: student7@example.com / contraseña: password",
        tecnologias: {
            frontend: ["React", "TypeScript", "CSS", "Tailwind CSS"],
            backend: ["JavaScript","Node.js", "PostgreSQL", "Docker", "Git"],
            herramientas: ["Trello", "Postman", "Supabase / Neon", "Swagger", "Render"]
        },
        repo: "https://github.com/Ezequiel-247/DessApp",
        demo: "https://desapp-frontend.onrender.com/"
    },
    {
        titulo: "Plataforma de streaming — Full Stack",
        tipo: "personal",
        imagen: homeNetflixImg,
        descripcion:
            "Este proyecto es una simulación de la experiencia de usuario de Netflix, " +
            "desarrollada como una aplicación Full Stack. La plataforma permite el registro " +
            "de usuarios, la gestión de múltiples perfiles (hasta 3) y la exploración de un " +
            "catálogo dinámico precargado con 50 títulos. Además, integra la API de YouTube " +
            "para reproducir los tráilers reales al interactuar con las series y películas.",
        tecnologias: {
            frontend: ["React", "CSS"],
            backend: ["JavaScript","Node.js", "Sequelize", "Sqlite"],
            herramientas: ["Render"]
        },
        repo: "https://github.com/Ezequiel-247/App-de-Series-estilo-NETFLIX",
        demo: "https://app-de-series-estilo-netflix-front.onrender.com"
    },
    {
        titulo: "UnaHur - Anti Social",
        tipo: "personal",
        imagen: unaHurImg,
        descripcion:
            "Plataforma interactiva desarrollada para la UNAHUR que permite a los usuarios " +
            "compartir contenido, comentar y reaccionar. Implementa una arquitectura robusta " +
            "con validaciones de seguridad y persistencia de datos.\n\n" +
            "Se crearon avatares con bots que, al publicar un usuario, reaccionan y comentan " +
            "automáticamente, simulando actividad real en la red social.",
        tecnologias: {
            frontend: ["React", "CSS"],
            backend: ["JavaScript","Node.js", "Sequelize", "PostgreSQL"],
            herramientas: ["Render"]
        },
        repo: "https://github.com/Ezequiel-247/Red-Anti-Social-Unahur",
        demo: "https://red-anti-social-front.onrender.com/"
    }
    ],
    en: [
        {
            titulo: "Water Management System — INTA",
            tipo: "laboral",
            imagen: intaImg,
            esFoto: true,
            descripcion:
                "During my time at INTA, I developed a Backend software product designed for the " +
                "management, processing, and visualization of data from phreatigraphs and limnigraphs.\n\n" +
                "• Stack requested by the client: Flask, Python, JavaScript and Jinja2, with MongoDB as a non-relational database to organize large volumes of groundwater meter data.\n" +
                "• Export modules (PDF/Excel) and graphing tools to optimize the technical analysis done by the Institute of Climate and Water engineers.\n" +
                "• Query interface with a dynamic table to view and download records in real time.\n\n" +
                "Due to contract terms and confidentiality, I can't share the code, but I'm happy to discuss the architecture in a technical interview.",
            referencia:{
                Nombre: "Sofía Havrylenko",
                Puesto: "Engineer at INTA",
                Contacto: "+5491169528278"
            },
            video: "https://www.youtube.com/watch?v=bGe9rUW3NF0",
            tecnologias: {
                frontend: ["Jinja", "CSS"],
                backend: ["JavaScript","Node.js", "Python", "Flask", "MongoDB"]
            },
        },
        {
            titulo: "University Student Support System",
            tipo: "personal",
            imagen: desarrolloAppImg,
            descripcion:
                "Final integrative project for the Application Development subject at UNAHUR. " +
                "It consists of the design and implementation of a scalable Full Stack web solution, " +
                "applying agile methodologies (Scrum) with task management in Trello, collaborative " +
                "version control on GitHub, and software architecture best practices, focusing on a " +
                "robust backend and an intuitive interface.\n\n" +
                "You can try the demo with the user: usuario7 / password: password",
            tecnologias: {
                frontend: ["React", "TypeScript", "CSS", "Tailwind CSS"],
                backend: ["Node.js", "PostgreSQL", "Docker", "Git"],
                herramientas: ["Trello", "Postman", "Supabase / Neon", "Swagger", "Render"]
            },
            repo: "https://github.com/Ezequiel-247/DessApp",
            demo: "https://desapp-frontend.onrender.com/"
        },
        {
            titulo: "Streaming Platform — Full Stack",
            tipo: "personal",
            imagen: homeNetflixImg,
            descripcion:
                "This project is a simulation of the Netflix user experience, " +
                "developed as a Full Stack application. The platform allows user registration, " +
                "management of multiple profiles (up to 3), and exploration of a " +
                "dynamic catalog preloaded with 50 titles. In addition, it integrates the YouTube API " +
                "to play real trailers when interacting with series and movies.",
            tecnologias: {
                frontend: ["React", "CSS"],
                backend: ["JavaScript","Node.js", "Sequelize", "Sqlite"],
                herramientas: ["Render"]
            },
            repo: "https://github.com/Ezequiel-247/App-de-Series-estilo-NETFLIX",
            demo: "https://app-de-series-estilo-netflix-front.onrender.com"
        },
        {
            titulo: "UnaHur - Anti Social",
            tipo: "personal",
            imagen: unaHurImg,
            descripcion:
                "Interactive platform developed for UNAHUR that allows users " +
                "to share content, comment, and react. It implements a robust architecture " +
                "with security validations and data persistence.\n\n" +
                "Bot avatars were created that automatically react and comment whenever a user " +
                "makes a post, simulating real activity on the social network.",
            tecnologias: {
                frontend: ["React", "CSS"],
                backend: ["JavaScript","Node.js", "Sequelize", "PostgreSQL"],
                herramientas: ["Render"]
            },
            repo: "https://github.com/Ezequiel-247/Red-Anti-Social-Unahur",
            demo: "https://red-anti-social-front.onrender.com/"
        }
    ]
};
