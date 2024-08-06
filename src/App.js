import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import About from './components/About/About';
import Skill from './components/Skill/Skill';
import Education from './components/Education/Education';
import Project from './components/Project/Project';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <div className="app">
      <Header />
      <main className="container">
        <About />
        <Skill />
        <Education />
        <Project />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
