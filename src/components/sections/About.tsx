import React from 'react';
import { motion } from 'framer-motion';
import { Leaf } from 'lucide-react';
import { useLanguage } from '../../hooks/useLanguage';
import { useTranslation } from '../../hooks/useTranslation';

const About: React.FC = () => {
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
    <section id="about" className="section bg-beige/30">
      {/* Section title with icon */}
      <div className="flex items-center justify-center mb-12">
        <Leaf className="text-primary mr-2" size={24} />
        <h2 className="text-primary">{t('about.title')}</h2>
      </div>

      <div className={`grid grid-cols-1 md:grid-cols-2 gap-10 items-center ${direction === 'rtl' ? '' : 'md:flex-row-reverse'}`}>
        {/* Content */}
        <motion.div
          className={`${direction === 'rtl' ? 'text-right' : 'text-left'}`}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.p 
            className="mb-6"
            variants={itemVariants}
          >
            {t('about.intro')}
          </motion.p>
          
          <motion.p 
            className="mb-6"
            variants={itemVariants}
          >
            {t('about.mission')}
          </motion.p>
          
          <motion.p
            className="mb-8"
            variants={itemVariants}
          >
            {t('about.values')}
          </motion.p>

          <motion.div 
            className={`flex ${direction === 'rtl' ? 'justify-end space-x-reverse' : 'justify-start'} space-x-4`}
            variants={itemVariants}
          >
            <button className="btn btn-primary">
              {t('about.more')}
            </button>
            <button className="btn btn-secondary">
              {t('about.products')}
            </button>
          </motion.div>
        </motion.div>

        {/* Image Grid */}
        <motion.div
          className="grid grid-cols-2 gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="h-48 rounded-2xl overflow-hidden">
            <img 
              src="https://images.pexels.com/photos/2286895/pexels-photo-2286895.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
              alt="Agriculture" 
              className="w-full h-full object-cover" 
            />
          </div>
          <div className="h-48 rounded-2xl overflow-hidden">
            <img 
              src="https://images.pexels.com/photos/2933243/pexels-photo-2933243.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
              alt="Agriculture" 
              className="w-full h-full object-cover" 
            />
          </div>
          <div className="h-48 rounded-2xl overflow-hidden">
            <img 
              src="https://images.pexels.com/photos/6152103/pexels-photo-6152103.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
              alt="Agriculture" 
              className="w-full h-full object-cover" 
            />
          </div>
          <div className="h-48 rounded-2xl overflow-hidden">
            <img 
              src="https://images.pexels.com/photos/1500049/pexels-photo-1500049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
              alt="Agriculture" 
              className="w-full h-full object-cover" 
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;