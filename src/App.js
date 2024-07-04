import React, { useRef } from 'react';
import './App.css';
import DrawerAppBar from './components/DrawerAppBar';
import Portfolio from './components/Portfolio';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {
  const homeRef = useRef(null);
  const aboutMeRef = useRef(null);
  const portfolioRef = useRef(null);

  const handleNavClick = (section) => {
    if (section === 'Home' && homeRef.current) {
      homeRef.current.scrollIntoView({ behavior: 'smooth' });
    } else if (section === 'About' && aboutMeRef.current) {
      aboutMeRef.current.scrollIntoView({ behavior: 'smooth' });
    } else if (section === 'Projects' && portfolioRef.current) {
      portfolioRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleArrowClick = (section) => {
    handleNavClick(section); // Utilize the existing navigation function
  };

  return (
    <main className="scrollable-main">
      <DrawerAppBar onNavClick={handleNavClick} />
   
      <div ref={homeRef}>
        <Portfolio onArrowClick={() => handleArrowClick('About')} />
      </div>
      <div ref={aboutMeRef} style={{ paddingTop: '50px' }}>
        <AboutMe />
      </div>
      <div ref={portfolioRef} style={{ paddingTop: '50px' }}>
      <Projects />
      
      </div>
      <Footer />
    </main>
  );
}

export default App;
