import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, Users, Truck, Store } from 'lucide-react';
import { useLanguage } from '../../hooks/useLanguage';
import { useTranslation } from '../../hooks/useTranslation';
import { missions } from '../../data';

const Mission: React.FC = () => {
  const { language, direction } = useLanguage();
  const { t } = useTranslation();

  // Get icon component based on string name
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Leaf':
        return <Leaf size={24} className="text-primary" />;
      case 'Users':
        return <Users size={24} className="text-primary" />;
      case 'Truck':
        return <Truck size={24} className="text-primary" />;
      case 'Store':
        return <Store size={24} className="text-primary" />;
      default:
        return <Leaf size={24} className="text-primary" />;
    }
  };

  return (
    <section id="mission" className="section bg-beige/30">
      <h2 className={`text-primary mb-12 ${direction === 'rtl' ? 'text-right' : 'text-left'}`}>
        {t('mission.title')}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {missions.map((mission) => (
          <motion.div
            key={mission.id}
            className="card hover:bg-white/80"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className={`flex ${direction === 'rtl' ? 'flex-row-reverse text-right' : 'text-left'} items-start`}>
              <div className={`flex-shrink-0 p-3 bg-secondary/20 rounded-lg ${direction === 'rtl' ? 'ml-4' : 'mr-4'}`}>
                {getIcon(mission.icon)}
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">
                  {mission.title[language]}
                </h3>
                <p>
                  {mission.description[language]}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Mission;