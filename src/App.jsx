import Header from './components/Header';
import Main from './components/Main';
import Proyectos from './components/Proyectos';
import Contactame from './components/Contactame';
import Habilidades from './components/Habilidades';
import { LanguageProvider } from './context/LanguageContext.jsx';
import ScrollToTop from './components/ScrollToTop';
import Chatbot from './components/Chatbot.jsx';

function App() {
    return (
        <LanguageProvider>
            <Header />
            <Main />
            <Habilidades />
            <Proyectos />
            <Contactame />
            <ScrollToTop />
            <Chatbot />
        </LanguageProvider>
    );
}

export default App;
