import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useLanguage } from '../../hooks/useLanguage';
import { useTranslation } from '../../hooks/useTranslation';

const Hero: React.FC = () => {
  const { direction } = useLanguage();
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

  const itemVariants = {
    hidden: { opacity: 0, x: direction === 'rtl' ? 50 : -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const scrollDown = () => {
    document.getElementById('welcome')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
          alt="Corn Field Background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 container mx-auto px-4">
        <motion.div
          className={`max-w-2xl ${direction === 'rtl' ? 'text-right' : 'text-left'}`}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            className="text-white text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
            variants={itemVariants}
          >
            {t('common.tagline')}
          </motion.h1>

          <motion.p
            className="text-white/90 text-xl md:text-2xl mb-8"
            variants={itemVariants}
          >
            {t('common.subtitle')}
          </motion.p>

          <motion.div variants={itemVariants}>
            <button className="btn btn-primary" onClick={scrollDown}>
              {t('hero.cta')}
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer z-10"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
        onClick={scrollDown}
      >
        <ChevronDown size={32} className="text-white/70 hover:text-white transition-colors" />
      </motion.div>
    </section>
  );
};

export default Hero;
