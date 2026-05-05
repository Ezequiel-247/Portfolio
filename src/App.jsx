import Header from './components/Header';
import Main from './components/Main';
import Proyectos from './components/Proyectos';
import Contactame from './components/Contactame';
import Habilidades from './components/Habilidades';
import { LanguageProvider } from './context/LanguageContext.jsx';
import ScrollToTop from './components/ScrollToTop';

function App() {
    return (
        <LanguageProvider>
            <Header />
            <Main />
            <Habilidades />
            <Proyectos />
            <Contactame />
            <ScrollToTop />
        </LanguageProvider>
    );
}

export default App;
