export type Language = 'ar' | 'fr' | 'en';

export type Direction = 'rtl' | 'ltr';

export interface LanguageContextType {
  language: Language;
  direction: Direction;
  setLanguage: (lang: Language) => void;
}

export interface NavItem {
  key: string;
  label: {
    ar: string;
    fr: string;
    en: string;
  };
  href: string;
}

export interface TeamMember {
  id: number;
  name: {
    ar: string;
    fr: string;
    en: string;
  };
  role: {
    ar: string;
    fr: string;
    en: string;
  };
  bio: {
    ar: string;
    fr: string;
    en: string;
  };
  image: string;
}

export interface Mission {
  id: number;
  title: {
    ar: string;
    fr: string;
    en: string;
  };
  description: {
    ar: string;
    fr: string;
    en: string;
  };
  icon: string;
}

export interface Vision {
  id: number;
  title: {
    ar: string;
    fr: string;
    en: string;
  };
  description: {
    ar: string;
    fr: string;
    en: string;
  };
}