import { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';

const DescargarCV = () => {
  const { language } = useLanguage();
  const [lastCvLang, setLastCvLang] = useState('es');
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('cvLanguage');
    if (saved === 'es' || saved === 'en') {
      setLastCvLang(saved);
      return;
    }
    const nav = (navigator.language || navigator.userLanguage || '').toLowerCase();
    setLastCvLang(nav.startsWith('en') ? 'en' : 'es');
  }, []);

  useEffect(() => {
    localStorage.setItem('cvLanguage', lastCvLang);
  }, [lastCvLang]);

  const files = {
    es: 'Ezequiel Ortiz Cv.pdf',
    en: 'Ezequiel_Ortiz_CV_English.pdf'
  };

  const downloadFile = (lang) => {
    const filename = files[lang];
    if (!filename) return;
    // trigger download programmatically
    const link = document.createElement('a');
    link.href = `/${filename}`;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    link.remove();
    setLastCvLang(lang);
    setModalOpen(false);
  };

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') setModalOpen(false);
    };
    if (modalOpen) document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [modalOpen]);

  // Prevent body scroll and disable chatbot when modal is open
  useEffect(() => {
    const prevOverflow = document.body.style.overflow;
    if (modalOpen) {
      document.body.style.overflow = 'hidden';
      document.body.classList.add('cv-modal-open');
    } else {
      document.body.classList.remove('cv-modal-open');
      document.body.style.overflow = prevOverflow || '';
    }
    return () => {
      document.body.classList.remove('cv-modal-open');
      document.body.style.overflow = prevOverflow || '';
    };
  }, [modalOpen]);

  return (
    <div className="descargar-cv" style={{display: 'flex', gap: '0.5rem', alignItems: 'center', position: 'relative'}}>
      <button
        type="button"
        onClick={() => setModalOpen(true)}
        className="btn btn-primary"
        aria-haspopup="dialog"
        aria-expanded={modalOpen}
        aria-label={language === 'es' ? 'Descargar Curriculum' : 'Download Resume'}
      >
        {language === 'es' ? 'Descargar CV' : 'Download CV'}
      </button>

      {modalOpen && (
        <div className="cv-modal-overlay" role="dialog" aria-modal="true" aria-label={language === 'es' ? 'Seleccionar idioma de CV' : 'Select resume language'} onClick={() => setModalOpen(false)}>
          <div className="cv-modal-card" onClick={(e) => e.stopPropagation()}>
            <button aria-label={language === 'es' ? 'Cerrar' : 'Close'} className="cv-modal-close" onClick={() => setModalOpen(false)}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path d="M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <p className="cv-modal-question">{language === 'es' ? '¿En qué idioma quieres descargar mi curriculum?' : 'Which language would you like to download the resume in?'}</p>
            <p className="cv-modal-subtitle">{language === 'es' ? 'Puedes elegir Español o Inglés. Tu última elección será recordada.' : 'You can choose Spanish or English. Your last choice will be remembered.'}</p>
            <div className="cv-modal-actions">
              <button type="button" onClick={() => downloadFile('es')} className="btn btn-primary cv-modal-btn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M12 3v12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M8 11l4 4 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M21 21H3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                <span>{language === 'es' ? 'Español' : 'Spanish'}</span>
              </button>
              <button type="button" onClick={() => downloadFile('en')} className="btn btn-secondary cv-modal-btn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M12 3v12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M8 11l4 4 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M21 21H3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                <span>{language === 'es' ? 'Inglés' : 'English'}</span>
              </button>
            </div>
          </div>
        </div>
      )}
      
    </div>
  );
};

export default DescargarCV;
