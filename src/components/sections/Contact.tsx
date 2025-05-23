import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone } from 'lucide-react';
import { useLanguage } from '../../hooks/useLanguage';
import { useTranslation } from '../../hooks/useTranslation';

const Contact: React.FC = () => {
  const { direction, language } = useLanguage();
  const { t } = useTranslation();

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="contact" className="section">
      <h2 className={`text-primary mb-12 ${direction === 'rtl' ? 'text-right' : 'text-left'}`}>
        {t('contact.title')}
      </h2>

      <div className={`grid grid-cols-1 md:grid-cols-2 gap-10 ${direction === 'rtl' ? 'md:flex-row-reverse' : ''}`}>
        {/* Contact Form */}
        <motion.div
          className="card"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <form>
            <motion.div className="mb-6" variants={itemVariants}>
              <label 
                htmlFor="name" 
                className={`block ${direction === 'rtl' ? 'text-right' : 'text-left'} text-charcoal font-medium mb-2`}
              >
                {t('contact.name')}
              </label>
              <input
                type="text"
                id="name"
                className={`w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary ${
                  direction === 'rtl' ? 'text-right' : 'text-left'
                }`}
              />
            </motion.div>

            <motion.div className="mb-6" variants={itemVariants}>
              <label 
                htmlFor="email" 
                className={`block ${direction === 'rtl' ? 'text-right' : 'text-left'} text-charcoal font-medium mb-2`}
              >
                {t('contact.email')}
              </label>
              <input
                type="email"
                id="email"
                className={`w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary ${
                  direction === 'rtl' ? 'text-right' : 'text-left'
                }`}
              />
            </motion.div>

            <motion.div className="mb-6" variants={itemVariants}>
              <label 
                htmlFor="message" 
                className={`block ${direction === 'rtl' ? 'text-right' : 'text-left'} text-charcoal font-medium mb-2`}
              >
                {t('contact.message')}
              </label>
              <textarea
                id="message"
                rows={5}
                className={`w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary ${
                  direction === 'rtl' ? 'text-right' : 'text-left'
                }`}
              ></textarea>
            </motion.div>

            <motion.div 
              className={`${direction === 'rtl' ? 'text-right' : 'text-left'}`}
              variants={itemVariants}
            >
              <button type="submit" className="btn btn-primary">
                {t('contact.send')}
              </button>
            </motion.div>
          </form>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          className={`flex flex-col ${direction === 'rtl' ? 'text-right' : 'text-left'}`}
          initial={{ opacity: 0, x: direction === 'rtl' ? -20 : 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="h-60 rounded-2xl overflow-hidden mb-6">
            <img 
              src="https://images.pexels.com/photos/7728089/pexels-photo-7728089.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
              alt="Representative portrait" 
              className="w-full h-full object-cover" 
            />
          </div>

          <div className="card flex-grow">
            <h3 className="text-xl font-bold mb-4 text-primary">
              {language === 'ar' ? 'معلومات الاتصال' : language === 'fr' ? 'Informations de contact' : 'Contact Information'}
            </h3>

            <ul className="space-y-4">
              <li className={`flex ${direction === 'rtl' ? 'flex-row-reverse' : ''} items-center`}>
                <Phone size={20} className={`text-primary ${direction === 'rtl' ? 'ml-3' : 'mr-3'}`} />
                <span>{t('contact.phone')}</span>
              </li>
              <li className={`flex ${direction === 'rtl' ? 'flex-row-reverse' : ''} items-center`}>
                <Mail size={20} className={`text-primary ${direction === 'rtl' ? 'ml-3' : 'mr-3'}`} />
                <span>contact@fellahbiougra.ma</span>
              </li>
              <li className={`flex ${direction === 'rtl' ? 'flex-row-reverse' : ''} items-center`}>
                <MapPin size={20} className={`text-primary ${direction === 'rtl' ? 'ml-3' : 'mr-3'}`} />
                <span>{t('contact.address')}</span>
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;