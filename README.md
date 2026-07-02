# Portfolio - Ezequiel Ortiz

Portfolio personal de Eduardo Ezequiel Ortiz, Desarrollador Full-Stack especializado en Backend.

Sitio en vivo: https://portfolio-ezequiel-qzz0.onrender.com/

## Stack

- [React 19](https://react.dev/) + [Vite 7](https://vitejs.dev/)
- CSS plano por componente, con variables CSS para el tema claro/oscuro
- Context API para idioma (ES/EN) y tema
- [Formspree](https://formspree.io/) para el formulario de contacto

## Funcionalidades

- Soporte bilingüe (español / inglés)
- Tema claro / oscuro persistido en `localStorage`
- Secciones: Inicio, Educación, Habilidades, Proyectos, Contacto
- Chatbot flotante basado en reglas (sin dependencias externas)
- Formulario de contacto con validaciones, captcha matemático y honeypot anti-spam

## Desarrollo

```bash
npm install
npm run dev      # servidor de desarrollo
npm run build    # build de producción
npm run preview  # preview del build
npm run lint     # ESLint
```

## Estructura

```
src/
  components/   # componentes de UI
  hooks/        # lógica reutilizable (useChatbot, useContactForm, useTheme)
  context/      # LanguageContext
  data/         # contenido (proyectos, estudios, textos) separado de la UI
  style/        # un .css por componente
  img/          # assets
```
