import { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';
import translations from '../locales';

export const useTranslation = () => {
  const { language } = useContext(LanguageContext);
  
  const t = (key: string): string => {
    const keys = key.split('.');
    let value = translations[language];
    
    // Navigate through nested objects to find the translation
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k];
      } else {
        console.warn(`Translation key not found: ${key}`);
        return key;
      }
    }
    
    return value as string;
  };
  
  return { t };
};