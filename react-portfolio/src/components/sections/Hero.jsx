import { useState, useEffect, useRef } from 'react';

export default function Hero() {
  const [time, setTime] = useState('');
  const [displayText, setDisplayText] = useState('');
  const [spotlightPos, setSpotlightPos] = useState({ x: 50, y: 50 });
  const heroRef = useRef(null);
  const canvasRef = useRef(null);
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
    }, 80);
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

    const handleMouseMove = (e) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        setSpotlightPos({ x, y });
      }
    };

    globalThis.addEventListener('mousemove', handleMouseMove);
    return () => {
      clearInterval(interval);
      globalThis.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Particle grid animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animId;
    let particles = [];
    const resize = () => {
      canvas.width = canvas.offsetWidth * 2;
      canvas.height = canvas.offsetHeight * 2;
      ctx.scale(2, 2);
      initParticles();
    };
    const initParticles = () => {
      particles = [];
      const cols = Math.floor(canvas.offsetWidth / 80);
      const rows = Math.floor(canvas.offsetHeight / 80);
      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          particles.push({
            x: i * 80 + 40,
            y: j * 80 + 40,
            baseX: i * 80 + 40,
            baseY: j * 80 + 40,
            size: 1.5,
            alpha: Math.random() * 0.3 + 0.05
          });
        }
      }
    };
    const draw = () => {
      ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);
      particles.forEach((p, i) => {
        p.x = p.baseX + Math.sin(Date.now() * 0.001 + i * 0.5) * 3;
        p.y = p.baseY + Math.cos(Date.now() * 0.0008 + i * 0.3) * 3;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(232,83,30,${p.alpha})`;
        ctx.fill();
      });
      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 100) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(232,83,30,${0.04 * (1 - dist / 100)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
      animId = requestAnimationFrame(draw);
    };
    resize();
    draw();
    globalThis.addEventListener('resize', resize);
    return () => {
      cancelAnimationFrame(animId);
      globalThis.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <section className="hero" ref={heroRef}>
      <canvas ref={canvasRef} className="hero-canvas" />
      <div
        className="spotlight"
        style={{
          background: `radial-gradient(circle 600px at ${spotlightPos.x}% ${spotlightPos.y}%, rgba(232,83,30,0.06), transparent 70%)`
        }}
      />
      <div className="hero-content">
        <div className="hero-badge-row">
          <div className="hero-location">
            <span className="status-dot" />
            <span>Atlanta, GA</span>
            <span className="divider" />
            <span id="live-time">{time}</span>
          </div>
        </div>
        <h1 className="hero-title">{displayText}<span className="cursor-blink">|</span></h1>
        <p className="hero-subtitle">AI/ML Engineer · Full Stack Developer · Graduate Researcher</p>
        <div className="hero-info">
          <p>
            <span className="value">Growing up amidst rockets and automation ignited my passion for engineering. Today, I channel that inspiration into building software that scales, automates, adapts and creates autonomous systems to launch ideas into reality.</span>
          </p>
        </div>
        <div className="hero-cta">
          <a href="#projects" className="cta-primary">View Projects</a>
          <a href="#connect" className="cta-secondary">Get in Touch</a>
        </div>
      </div>
      <div className="scroll-indicator">
        <div className="mouse"><div className="wheel" /></div>
      </div>
    </section>
  );
}
