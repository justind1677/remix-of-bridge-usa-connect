import React, { createContext, useContext, useState, ReactNode, useCallback, useEffect, useRef } from 'react';
import { toast } from '@/hooks/use-toast';

type Language = 'en' | 'pt' | 'es';

const LANGUAGE_STORAGE_KEY = 'amanda-bridge-language';
const FIRST_VISIT_KEY = 'amanda-bridge-first-visit';

const languageNames: Record<Language, { name: string; flag: string }> = {
  en: { name: 'English', flag: '🇺🇸' },
  pt: { name: 'Português', flag: '🇧🇷' },
  es: { name: 'Español', flag: '🇨🇴' },
};

const detectBrowserLanguage = (): Language => {
  if (typeof window === 'undefined') return 'en';
  
  const browserLang = navigator.language || (navigator as any).userLanguage || '';
  const langCode = browserLang.toLowerCase();
  
  // Check for Portuguese (Brazil)
  if (langCode.startsWith('pt')) return 'pt';
  
  // Check for Spanish (Colombia or any Spanish)
  if (langCode.startsWith('es')) return 'es';
  
  // Default to English
  return 'en';
};

const getInitialLanguage = (): { language: Language; isFirstVisit: boolean } => {
  if (typeof window === 'undefined') return { language: 'en', isFirstVisit: false };
  
  const stored = localStorage.getItem(LANGUAGE_STORAGE_KEY);
  const hasVisited = localStorage.getItem(FIRST_VISIT_KEY);
  
  if (stored === 'en' || stored === 'pt' || stored === 'es') {
    return { language: stored, isFirstVisit: false };
  }
  
  // First visit: detect from browser
  return { language: detectBrowserLanguage(), isFirstVisit: !hasVisited };
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (en: string, pt: string, es?: string) => string;
  isTransitioning: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const initial = getInitialLanguage();
  const [language, setLanguageState] = useState<Language>(initial.language);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const hasShownToast = useRef(false);

  // Show welcome toast on first visit
  useEffect(() => {
    if (initial.isFirstVisit && !hasShownToast.current) {
      hasShownToast.current = true;
      localStorage.setItem(FIRST_VISIT_KEY, 'true');
      
      const { name, flag } = languageNames[language];
      setTimeout(() => {
        toast({
          title: `${flag} Welcome! / Bem-vindo! / ¡Bienvenido!`,
          description: language === 'en' 
            ? `We detected your browser language: ${name}. You can change it anytime using the language buttons above.`
            : language === 'pt'
            ? `Detectamos o idioma do seu navegador: ${name}. Você pode alterá-lo a qualquer momento usando os botões de idioma acima.`
            : `Detectamos el idioma de tu navegador: ${name}. Puedes cambiarlo en cualquier momento usando los botones de idioma de arriba.`,
        });
      }, 500);
    }
  }, []);

  // Persist language to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem(LANGUAGE_STORAGE_KEY, language);
  }, [language]);

  const setLanguage = useCallback((lang: Language) => {
    if (lang === language) return;
    
    setIsTransitioning(true);
    
    // Wait for fade out, then change language
    setTimeout(() => {
      setLanguageState(lang);
      // Small delay before removing transition state for fade in
      setTimeout(() => {
        setIsTransitioning(false);
      }, 50);
    }, 150);
  }, [language]);

  const t = (en: string, pt: string, es?: string) => {
    if (language === 'en') return en;
    if (language === 'pt') return pt;
    return es || en;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, isTransitioning }}>
      <div 
        className={`transition-opacity duration-150 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}
      >
        {children}
      </div>
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
