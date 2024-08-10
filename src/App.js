import React, { useRef, useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import './App.scss';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import About from './components/About/About';
import Skill from './components/Skill/Skill';
import Education from './components/Education/Education';
import Project from './components/Project/Project';
import Contact from './components/Contact/Contact';

function App() {
  const location = useLocation();
  const headerRef = useRef(null);

  useEffect(() => {
    // 페이지 이동 시 헤더로 스크롤
    if (headerRef.current) {
      headerRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [location]);

  return (
    <div className="wrap">
      <Header ref={headerRef} />
      <main className="container">
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/about" element={<About />} />
          <Route path="/skill" element={<Skill />} />
          <Route path="/education" element={<Education />} />
          <Route path="/project" element={<Project />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
