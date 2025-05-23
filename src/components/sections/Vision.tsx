import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../hooks/useLanguage';
import { useTranslation } from '../../hooks/useTranslation';
import { visions } from '../../data';

const Vision: React.FC = () => {
  const { language, direction } = useLanguage();
  const { t } = useTranslation();

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, x: direction === 'rtl' ? 50 : -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="vision" className="section">
      <h2 className={`text-primary mb-12 ${direction === 'rtl' ? 'text-right' : 'text-left'}`}>
        {t('vision.title')}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className={`col-span-1 ${direction === 'rtl' ? 'md:order-last' : ''}`}>
          {/* Large Image */}
          <motion.div
            className="h-full rounded-2xl overflow-hidden"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img 
              src="https://images.pexels.com/photos/2825350/pexels-photo-2825350.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
              alt="Moroccan greenhouse" 
              className="w-full h-full object-cover" 
            />
          </motion.div>
        </div>

        <div className="col-span-1 md:col-span-2">
          {/* Vision Cards */}
          <motion.div
            className="space-y-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {visions.map((vision) => (
              <motion.div 
                key={vision.id}
                className={`flex ${direction === 'rtl' ? 'flex-row-reverse' : ''} items-start card`}
                variants={cardVariants}
              >
                <div 
                  className="flex-shrink-0 w-12 h-12 bg-primary text-white rounded-lg flex items-center justify-center mr-4"
                >
                  {String(vision.id).padStart(2, '0')}
                </div>
                <div className={`${direction === 'rtl' ? 'text-right' : 'text-left'}`}>
                  <h3 className="text-xl font-bold mb-2">{vision.title[language]}</h3>
                  <p>{vision.description[language]}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Vision;