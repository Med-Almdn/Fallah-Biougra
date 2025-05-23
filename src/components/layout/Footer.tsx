import React from 'react';
import { motion } from 'framer-motion';
import { Facebook, Linkedin, Instagram, Mail, MapPin, Phone } from 'lucide-react';
import { useLanguage } from '../../hooks/useLanguage';
import { useTranslation } from '../../hooks/useTranslation';
import { navItems } from '../../data';

const Footer: React.FC = () => {
  const { language, direction } = useLanguage();
  const { t } = useTranslation();

  return (
    <footer className="bg-primary text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 ${direction === 'rtl' ? 'text-right' : 'text-left'}`}>
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-4">
              {language === 'ar' ? 'فلاح بيوڭرا' : 'FELLAH BIOUGRA'}
            </h3>
            <p className="mb-4 text-gray-200">{t('common.subtitle')}</p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-white hover:text-secondary transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white hover:text-secondary transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-white hover:text-secondary transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-4">
              {language === 'ar' ? 'روابط سريعة' : language === 'fr' ? 'Liens Rapides' : 'Quick Links'}
            </h3>
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.key}>
                  <a 
                    href={item.href} 
                    className="text-gray-200 hover:text-white transition-colors"
                  >
                    {item.label[language]}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-4">{t('contact.title')}</h3>
            <ul className="space-y-4">
              <li className={`flex ${direction === 'rtl' ? 'justify-end' : 'justify-start'} items-center`}>
                <Phone size={20} className={`${direction === 'rtl' ? 'ml-2' : 'mr-2'}`} />
                <span>{t('contact.phone')}</span>
              </li>
              <li className={`flex ${direction === 'rtl' ? 'justify-end' : 'justify-start'} items-center`}>
                <Mail size={20} className={`${direction === 'rtl' ? 'ml-2' : 'mr-2'}`} />
                <span>contact@fellahbiougra.ma</span>
              </li>
              <li className={`flex ${direction === 'rtl' ? 'justify-end' : 'justify-start'} items-center`}>
                <MapPin size={20} className={`${direction === 'rtl' ? 'ml-2' : 'mr-2'}`} />
                <span>{t('contact.address')}</span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-green-700 text-center">
          <p>{t('common.copyright')}</p>
          <p>
            {language === 'ar'
              ? 'تم الإنشاء بواسطة '
              : language === 'fr'
              ? 'Conçu par '
              : 'Built by '}
            <a
              href="https://www.linkedin.com/in/mohamed-almoudane-dev"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-white"
            >
              med-almdn
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;