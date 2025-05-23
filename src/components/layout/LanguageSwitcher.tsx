import React, { useState, useRef, useEffect } from 'react';
import { useLanguage } from '../../hooks/useLanguage';
import { ChevronDown, Globe } from 'lucide-react';

const LanguageSwitcher: React.FC = () => {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  
  const languages = [
    { code: 'ar', name: 'العربية' },
    { code: 'fr', name: 'Français' },
    { code: 'en', name: 'English' }
  ];

  // Handle click outside to close dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Toggle dropdown
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  // Change language
  const changeLanguage = (code: 'ar' | 'fr' | 'en') => {
    setLanguage(code);
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        className="flex items-center bg-white/10 hover:bg-white/20 px-3 py-2 rounded-lg transition-all duration-300"
        onClick={toggleDropdown}
      >
        <Globe size={18} className="mr-2" />
        <span className="mx-1">
          {language === 'ar' ? 'العربية' : language === 'fr' ? 'Français' : 'English'}
        </span>
        <ChevronDown size={16} className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      
      {isOpen && (
        <div className="absolute top-full right-0 mt-2 w-36 bg-white rounded-lg shadow-lg overflow-hidden z-50">
          <ul>
            {languages.map((lang) => (
              <li key={lang.code}>
                <button
                  className={`w-full text-left px-4 py-2 hover:bg-gray-100 transition-colors ${
                    language === lang.code ? 'bg-gray-100 text-primary font-medium' : 'text-charcoal'
                  }`}
                  onClick={() => changeLanguage(lang.code as 'ar' | 'fr' | 'en')}
                >
                  {lang.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;