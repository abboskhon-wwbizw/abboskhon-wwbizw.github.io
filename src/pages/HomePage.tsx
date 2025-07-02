import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import Home from '../components/Home';
import About from '../components/About';
import Projects from '../components/Projects';
import Resume from '../components/Resume';
import Contact from '../components/Contact';

const HomePage: React.FC = () => {
  const [currentSection, setCurrentSection] = useState('home');

  return (
    <>
      <Navigation 
        currentSection={currentSection} 
        setCurrentSection={setCurrentSection} 
      />
      <main>
        <Home />
        <About />
        <Projects />
        <Resume />
        <Contact />
      </main>
    </>
  );
};

export default HomePage;