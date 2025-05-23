import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../hooks/useLanguage';
import { useTranslation } from '../../hooks/useTranslation';

const Welcome: React.FC = () => {
  const { direction } = useLanguage();
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
    <section id="welcome" className="section">
      <div className={`grid grid-cols-1 md:grid-cols-2 gap-10 items-center ${direction === 'rtl' ? 'md:flex-row-reverse' : ''}`}>
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative h-80 md:h-96 lg:h-[500px] rounded-2xl overflow-hidden"
        >
          <img 
            src="https://images.pexels.com/photos/2382904/pexels-photo-2382904.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
            alt="Farmer team" 
            className="w-full h-full object-cover rounded-2xl" 
          />
        </motion.div>

        {/* Content */}
        <motion.div
          className={`${direction === 'rtl' ? 'text-right' : 'text-left'}`}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2 
            className="text-primary mb-6"
            variants={itemVariants}
          >
            {t('welcome.title')}
          </motion.h2>
          
          <motion.p 
            className="mb-6"
            variants={itemVariants}
          >
            {t('welcome.paragraph1')}
          </motion.p>
          
          <motion.p
            variants={itemVariants}
          >
            {t('welcome.paragraph2')}
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default Welcome;