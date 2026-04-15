import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navigation from './components/layout/Navigation';
import Hero from './components/sections/Hero';
import Experience from './components/sections/Experience';
import Projects from './components/sections/Projects';
import Skills from './components/sections/Skills';
import Education from './components/sections/Education';
import Footer from './components/layout/Footer';
import ExperienceGSU from './pages/ExperienceGSU';
import ExperienceISRO from './pages/ExperienceISRO';
import ProjectNL2Dash from './pages/ProjectNL2Dash';
import ProjectAura from './pages/ProjectAura';
import ProjectSonarAgent from './pages/ProjectSonarAgent';
import ProjectBotStudio from './pages/ProjectBotStudio';
import ProjectSafeStep from './pages/ProjectSafeStep';
import ProjectDocuChat from './pages/ProjectDocuChat';
import './styles/App.css';

function HomePage() {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -80px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    document.querySelectorAll('.fade-in, .stagger-children').forEach(el => {
      observer.observe(el);
    });

    const handleScroll = () => {
      const scrolled = window.scrollY;
      const parallaxElements = document.querySelectorAll('.parallax');
      parallaxElements.forEach(el => {
        const speed = el.dataset.speed || 0.5;
        el.style.transform = `translateY(${scrolled * speed}px)`;
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <Navigation />
      <Hero />
      <Experience />
      <Projects />
      <Skills />
      <Education />
      <Footer />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/experience/gsu" element={<ExperienceGSU />} />
        <Route path="/experience/isro" element={<ExperienceISRO />} />
        <Route path="/project/nl2dash" element={<ProjectNL2Dash />} />
        <Route path="/project/aura" element={<ProjectAura />} />
        <Route path="/project/sonaragent" element={<ProjectSonarAgent />} />
        <Route path="/project/botstudio" element={<ProjectBotStudio />} />
        <Route path="/project/safestep" element={<ProjectSafeStep />} />
        <Route path="/project/docuchat" element={<ProjectDocuChat />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
