import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useLanguage } from '../../hooks/useLanguage';
import { useTranslation } from '../../hooks/useTranslation';
import { navItems } from '../../data';
import LanguageSwitcher from './LanguageSwitcher';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, direction } = useLanguage();
  const { t } = useTranslation();

  // Handle scroll event to change header background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Animation variants
  const headerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <motion.header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
      initial="hidden"
      animate="visible"
      variants={headerVariants}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className={`text-2xl font-bold ${isScrolled ? 'text-primary' : 'text-white'}`}>
            {language === 'ar' ? 'فلاح بيوڭرا' : 'FELLAH BIOUGRA'}
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {/* Render navigation items in correct order based on language direction */}
            <ul className={`mx-6 flex items-center ${direction === 'rtl' ? 'space-x-reverse' : ''} space-x-6`}>
              {navItems.map((item) => (
                <li key={item.key}>
                  <a
                    href={item.href}
                    className={`hover:text-primary transition-colors ${
                      isScrolled ? 'text-charcoal' : 'text-white'
                    }`}
                  >
                    {item.label[language]}
                  </a>
                </li>
              ))}
            </ul>
            
            {/* Language Switcher */}
            <LanguageSwitcher />
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-2xl p-2"
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? 
              <X className={isScrolled ? 'text-charcoal' : 'text-white'} /> : 
              <Menu className={isScrolled ? 'text-charcoal' : 'text-white'} />
            }
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div 
          className="md:hidden bg-white shadow-lg"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          <nav className="container mx-auto px-4 py-4">
            <ul className={`flex flex-col ${direction === 'rtl' ? 'items-end' : 'items-start'} space-y-4`}>
              {navItems.map((item) => (
                <li key={item.key} className="w-full">
                  <a
                    href={item.href}
                    className="block py-2 text-charcoal hover:text-primary transition-colors"
                    onClick={toggleMenu}
                  >
                    {item.label[language]}
                  </a>
                </li>
              ))}
              <li className="pt-2 border-t border-gray-200 w-full">
                <div className="flex justify-center py-2">
                  <LanguageSwitcher />
                </div>
              </li>
            </ul>
          </nav>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Header;