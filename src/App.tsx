import React from 'react';
import { LanguageProvider } from './context/LanguageContext';
import Header from './components/layout/Header';
import Hero from './components/sections/Hero';
import Welcome from './components/sections/Welcome';
import About from './components/sections/About';
import Vision from './components/sections/Vision';
import Mission from './components/sections/Mission';
import Team from './components/sections/Team';
import Contact from './components/sections/Contact';
import Footer from './components/layout/Footer';

function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen">
        <Header />
        <main>
          <Hero />
          <Welcome />
          <About />
          <Vision />
          <Mission />
          <Team />
          <Contact />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;