import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

export const useChatbot = () => {
    const { language } = useLanguage();
    const [isOpen, setIsOpen] = useState(false);
    const [hasOpened, setHasOpened] = useState(false);
    
    const [messages, setMessages] = useState([
        { sender: 'bot', text: language === 'es' ? '¡Hola! Soy el asistente virtual de Ezequiel. ¿En qué te puedo ayudar?' : 'Hi! I am Ezequiel\'s virtual assistant. How can I help you?' }
    ]);

    const handleOptionClick = (option) => {
        setMessages(prev => [...prev, { sender: 'user', text: option.text }]);


        setTimeout(() => {
            setMessages(prev => [...prev, { 
                sender: 'bot', 
                text: option.reply, 
                actionUrl: option.actionUrl, 
                actionText: option.actionText 
            }]);
        }, 800);
    };

    const opciones = language === 'es' ? [
        { 
            text: '¿Cuáles son sus habilidades?', 
            reply: 'Ezequiel domina un stack muy versátil, destacando en:\n\n' +
                   '• Frontend: React, JavaScript, HTML/CSS, Tailwind CSS.\n' +
                   '• Backend: JavaScript, Node.js, Python, Flask, Mongoose, Postman (testeo de APIs).\n' +
                   '• Bases de Datos: SQL y NoSQL (MongoDB).\n\n' +
                   '• También tiene conocimientos a nivel académico en: Java (POO), Docker (básico), Git, TypeScript, Trello (trabajos grupales).\n\n' +
                   '• Más allá del código, es un perfil altamente proactivo, en constante investigación y aprendizaje de nuevas tecnologías para construir soluciones modernas y escalables.\n\n' +
                   '¡Puedes ver todos los detalles en la sección de Stack Tecnológico!' 
        },
        {   
            text: '¿Cuál es su experiencia laboral?', 
            reply: 'Ezequiel trabajó como Desarrollador en INTA (Instituto Nacional de Tecnología Agropecuaria).\n\n' + 
                   'Donde pudo desempeñarse como desarrollador fullstack con rol mas enfocado en el backend.\n\n' +
                   'Sus logros incluyen:\n\n' +
                   '• Arquitectura de Datos con Python y Flask.\n' +
                   '• Gestión de datos NoSQL en MongoDB.\n' +
                   '• Implementación de estructuras de datos eficientes para optimizar consultas y almacenamiento.\n' +
                   '• Automatización de hardware con Raspberry Pi 4.\n' +
                   '• Herramientas de análisis y exportación (PDF/Excel).\n' +
                   '• Interfaz interactiva en tiempo real con JavaScript, Jinja2 y Css.' 
        },
        { 
            text: 'Quiero descargar el CV de Ezequiel', 
            reply: '¡Claro! Puedes descargarlo directamente haciendo clic en el botón de abajo.', 
            actionUrl: 'Ezequiel Ortiz Cv.pdf', 
            actionText: 'Descargar CV' 
        },
        { 
            text: '¿Ezequiel esta buscando empleo?', 
            reply: 'Sí, Ezequiel está abierto a nuevas oportunidades. Le interesan roles como:\n\n' +
                   '• Desarrollador Fullstack\n' +
                   '• Desarrollador Front-end\n' +
                   '• Desarrollador Back-end\n' +
                   '• Data Scientist\n\n' +
                   '¡Usa el formulario de abajo para escribirle directamente!', 
            actionUrl: '#contacto', 
            actionText: 'Ir al formulario' 
        }
    ] : [
        { 
            text: 'What are his skills?', 
            reply: 'Ezequiel masters a versatile stack, highlighting:\n\n' +
                   '• Frontend: React, JavaScript, HTML/CSS, Tailwind CSS.\n' +
                   '• Backend: JavaScript, Node.js, Python, Flask, Mongoose, Postman (API testing).\n' +
                   '• Databases: SQL & NoSQL (MongoDB).\n\n' +
                   '• He also has academic knowledge in: Java (OOP), Docker (basics), Git, TypeScript, Trello (teamwork).\n\n' +
                   '• Beyond coding, he is a highly proactive professional, constantly researching and learning new technologies to build modern and scalable solutions.\n\n' +
                   'Check out the Tech Stack section for all details!' 
        },
        { 
            text: 'What is his work experience?', 
            reply: 'Ezequiel worked as a Back-end Developer at INTA (National Institute of Agricultural Technology).\n\n' +
                   'Where he was able to work as a fullstack developer with a focus on backend.\n\n' +
                   'His achievements include:\n\n' +
                   '• Data Architecture using Python and Flask.\n' +
                   '• NoSQL data management with MongoDB.\n' +
                   '• Implementation of efficient data structures to optimize queries and storage.\n' +
                   '• Hardware Automation with Raspberry Pi 4.\n' +
                   '• Analysis and export tools (PDF/Excel).\n' +
                   '• Real-time interactive interface with JavaScript, Jinja2 and Css.' 
        },
        { 
            text: "I want to download Ezequiel's CV", 
            reply: 'Sure! You can download it directly by clicking the button below.', 
            actionUrl: 'Ezequiel Ortiz Resume.pdf', 
            actionText: 'Download CV' 
        },
        { 
            text: 'Is Ezequiel looking for a job?', 
            reply: 'Yes, Ezequiel is open to new opportunities. He is interested in roles such as:\n\n' +
                   '• Fullstack Developer\n' +
                   '• Front-end Developer\n' +
                   '• Back-end Developer\n' +
                   '• Data Scientist\n\n' +
                   'Use the contact form below to reach out directly!', 
            actionUrl: '#contacto', 
            actionText: 'Go to form' 
        }
    ];

    // Retornamos todo lo que el componente visual necesite
    return { language, isOpen, setIsOpen, hasOpened, setHasOpened, messages, opciones, handleOptionClick };
};