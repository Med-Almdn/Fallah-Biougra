import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../hooks/useLanguage';
import { useTranslation } from '../../hooks/useTranslation';
import { teamMembers } from '../../data';

const Team: React.FC = () => {
  const { language, direction } = useLanguage();
  const { t } = useTranslation();

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section id="team" className="section">
      <div className="text-center mb-12">
        <h2 className="text-primary">{t('team.title')}</h2>
      </div>

      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {teamMembers.map((member) => (
          <motion.div 
            key={member.id}
            className="card hover:shadow-xl transition-all duration-300 overflow-hidden"
            variants={cardVariants}
            whileHover={{ y: -5 }}
          >
            <div className="h-48 mb-4 -mx-6 -mt-6 overflow-hidden">
              <img 
                src={member.image} 
                alt={member.name[language]} 
                className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105" 
              />
            </div>
            <div className={`${direction === 'rtl' ? 'text-right' : 'text-left'}`}>
              <h3 className="text-xl font-bold text-primary mb-1">{member.name[language]}</h3>
              <p className="text-gray-text mb-3">{member.role[language]}</p>
              <p className="text-sm">{member.bio[language]}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Team;