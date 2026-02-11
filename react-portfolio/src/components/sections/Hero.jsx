import { useState, useEffect, useRef } from 'react';

export default function Hero() {
  const [time, setTime] = useState('');
  const [displayText, setDisplayText] = useState('');
  const [spotlightPos, setSpotlightPos] = useState({ x: 50, y: 50 });
  const gradient1Ref = useRef(null);
  const gradient2Ref = useRef(null);
  const heroRef = useRef(null);
  const fullText = "Hi, I'm Aasrith Mandava";

  useEffect(() => {
    let index = 0;
    const typingInterval = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(typingInterval);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, []);

  useEffect(() => {
    const updateTime = () => {
      const options = {
        timeZone: 'America/New_York',
        hour: 'numeric',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
      };
      setTime(new Date().toLocaleTimeString('en-US', options));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let currentX = window.innerWidth / 2;
    let currentY = window.innerHeight / 2;
    let animationId;

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        setSpotlightPos({ x, y });
      }
    };

    const animateGradients = () => {
      currentX += (mouseX - currentX) * 0.1;
      currentY += (mouseY - currentY) * 0.1;

      const offsetX1 = (currentX - window.innerWidth / 2) * 0.3;
      const offsetY1 = (currentY - window.innerHeight / 2) * 0.3;
      const offsetX2 = (currentX - window.innerWidth / 2) * 0.2;
      const offsetY2 = (currentY - window.innerHeight / 2) * 0.2;

      if (gradient1Ref.current) {
        gradient1Ref.current.style.transform = `translate(${offsetX1}px, ${offsetY1}px)`;
      }
      if (gradient2Ref.current) {
        gradient2Ref.current.style.transform = `translate(${offsetX2}px, ${offsetY2}px)`;
      }

      animationId = requestAnimationFrame(animateGradients);
    };

    window.addEventListener('mousemove', handleMouseMove);
    animateGradients();

    return () => {
      clearInterval(interval);
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationId) cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <section className="hero" ref={heroRef}>
      <div className="hero-gradient" ref={gradient1Ref}></div>
      <div className="hero-gradient-2" ref={gradient2Ref}></div>
      <div
        className="spotlight"
        style={{
          background: `radial-gradient(circle 800px at ${spotlightPos.x}% ${spotlightPos.y}%, rgba(255, 255, 255, 0.1), rgba(200, 200, 200, 0.05) 40%, transparent 70%)`
        }}
      ></div>
      <div className="hero-content">

        <div className="hero-location">
          <span>📍 Atlanta, GA</span>
          <span className="divider"></span>
          <span id="live-time">{time}</span>
        </div>
        <h1 className="hero-title">{displayText}<span className="cursor-blink">|</span></h1>
        <div className="hero-info">
          <p>
            <span className="value">Growing up amidst rockets and automation ignited my passion for engineering. Today, I channel that inspiration into building software that scales, automates, adapts and creating Autonomous systems to launch ideas into reality.</span>
          </p>
        </div>
      </div>
      <div className="scroll-indicator">
        <div className="mouse">
          <div className="wheel"></div>
        </div>
        <div className="arrow-scroll">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </section>
  );
}
