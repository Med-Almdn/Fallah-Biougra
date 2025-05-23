import React, { createContext, useState, useEffect, ReactNode } from 'react';
import { Language, Direction, LanguageContextType } from '../types';

// Create context with default values
export const LanguageContext = createContext<LanguageContextType>({
  language: 'ar',
  direction: 'rtl',
  setLanguage: () => {},
});

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  // Get saved language from localStorage or default to Arabic
  const getInitialLanguage = (): Language => {
    const savedLanguage = localStorage.getItem('language');
    return (savedLanguage as Language) || 'ar';
  };

  // Set initial language state
  const [language, setLanguageState] = useState<Language>(getInitialLanguage());
  
  // Determine direction based on language
  const direction: Direction = language === 'ar' ? 'rtl' : 'ltr';

  // Update language in state and localStorage
  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('language', lang);
  };

  // Update HTML attributes when language changes
  useEffect(() => {
    const htmlElement = document.documentElement;
    htmlElement.setAttribute('lang', language);
    htmlElement.setAttribute('dir', direction);
    
    // Add language-specific class to body
    document.body.className = '';
    document.body.classList.add(`lang-${language}`);
    
    // Update font family based on language
    if (language === 'ar') {
      document.body.classList.add('font-arabic-body');
    } else if (language === 'fr') {
      document.body.classList.add('font-fr-body');
    } else {
      document.body.classList.add('font-en-body');
    }
  }, [language, direction]);

  return (
    <LanguageContext.Provider value={{ language, direction, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};