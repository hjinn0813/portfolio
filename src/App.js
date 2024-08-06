import React, { useState, useEffect } from 'react';
import { Button } from '@mui/material';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import './App.scss';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import About from './components/About/About';
import Skill from './components/Skill/Skill';
import Education from './components/Education/Education';
import Project from './components/Project/Project';
import Contact from './components/Contact/Contact';

function App() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="wrap">
      <Header />
      <main className="container">
        <About />
        <Skill />
        <Education />
        <Project />
        <Contact />
      </main>
      <Footer />

      {showButton && (
        <Button
          className="topbtn"
          onClick={scrollToTop}
          variant="contained"
          color="primary"
        >
          <ArrowCircleUpIcon />
        </Button>
      )}
    </div>
  );
}

export default App;
