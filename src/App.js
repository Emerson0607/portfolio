import React, { useRef } from 'react';
import './App.css';
import DrawerAppBar from './components/DrawerAppBar';
import Portfolio from './components/Portfolio';
import AboutMe from './components/AboutMe';
import WorkExperience from './components/WorkExperience';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import Footer from './components/Footer';

function App() {
  const homeRef = useRef(null);
  const aboutMeRef = useRef(null);
  const experienceRef = useRef(null);
  const projectsRef = useRef(null);
  const certificatesRef = useRef(null);

  const handleNavClick = (section) => {
    if (section === 'Home' && homeRef.current) {
      homeRef.current.scrollIntoView({ behavior: 'smooth' });
    } else if (section === 'About' && aboutMeRef.current) {
      aboutMeRef.current.scrollIntoView({ behavior: 'smooth' });
    } else if (section === 'Experience' && experienceRef.current) {
      experienceRef.current.scrollIntoView({ behavior: 'smooth' });
    } else if (section === 'Projects' && projectsRef.current) {
      projectsRef.current.scrollIntoView({ behavior: 'smooth' });
    } else if (section === 'Certificates' && certificatesRef.current) {
      certificatesRef.current.scrollIntoView({ behavior: 'smooth' });
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
      <WorkExperience ref={experienceRef} />
      <div style={{ paddingTop: '50px' }}>
        <Projects ref={projectsRef} />
      </div>
      <Certificates ref={certificatesRef} />
      <Footer />
    </main>
  );
}

export default App;