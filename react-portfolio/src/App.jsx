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
import ExperienceSVAP from './pages/ExperienceSVAP';
import ExperienceISRO from './pages/ExperienceISRO';
import ProjectMindVault from './pages/ProjectMindVault';
import ProjectBotStudio from './pages/ProjectBotStudio';
import ProjectHelpPro from './pages/ProjectHelpPro';
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
        <Route path="/experience/svap" element={<ExperienceSVAP />} />
        <Route path="/experience/isro" element={<ExperienceISRO />} />
        <Route path="/project/mindvault" element={<ProjectMindVault />} />
        <Route path="/project/botstudio" element={<ProjectBotStudio />} />
        <Route path="/project/helppro" element={<ProjectHelpPro />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
