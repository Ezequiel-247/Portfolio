import Header from './components/Header';
import Main from './components/Main';
import Proyectos from './components/Proyectos';
import Contactame from './components/Contactame';
import Habilidades from './components/Habilidades';
import Educacion from './components/Educacion';
import { LanguageProvider } from './context/LanguageContext.jsx';

function App() {
    return (
        <LanguageProvider>
            <Header />
            <Main />
            <Educacion />
            <Habilidades />
            <Proyectos />
            <Contactame />
        </LanguageProvider>
    );
}

export default App;
