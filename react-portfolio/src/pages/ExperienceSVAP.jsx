import { useNavigate } from 'react-router-dom';

export default function ExperienceSVAP() {
  const navigate = useNavigate();

  return (
    <div className="experience-detail">
      <button onClick={() => navigate('/')} className="back-button">← Back to Portfolio</button>
      
      <div className="detail-header">
        <div className="detail-logo logo-svap">SV</div>
        <div>
          <h1>SVAP Technologies</h1>
          <p className="detail-role">Software Developer Intern</p>
          <p className="detail-period">May 2025 – Aug 2025 | Remote</p>
        </div>
      </div>

      <div className="detail-content">
        <section>
          <h2>Overview</h2>
          <p>Contributed to innovative AI-driven synthetic media solutions at SVAP Technologies, working on computer vision projects and developing cutting-edge applications for media generation and processing.</p>
        </section>

        <section>
          <h2>Key Projects & Achievements</h2>
          <ul>
            <li>Developed AI-powered synthetic media generation platform using deep learning models</li>
            <li>Implemented computer vision algorithms for real-time image and video processing</li>
            <li>Built RESTful APIs using FastAPI for seamless frontend-backend integration</li>
            <li>Optimized model inference performance, reducing processing time by 40%</li>
            <li>Created responsive React interfaces for media manipulation tools</li>
            <li>Integrated cloud storage solutions for efficient media asset management</li>
            <li>Collaborated with design team to enhance user experience and interface design</li>
            <li>Participated in code reviews and implemented best practices for clean code</li>
          </ul>
        </section>

        <section>
          <h2>Technical Impact</h2>
          <ul>
            <li>Improved application performance through efficient algorithm optimization</li>
            <li>Reduced API response time by implementing caching strategies</li>
            <li>Enhanced code quality through comprehensive testing and documentation</li>
          </ul>
        </section>

        <section>
          <h2>Technologies Used</h2>
          <div className="tech-tags">
            <span>Python</span>
            <span>TensorFlow</span>
            <span>PyTorch</span>
            <span>Computer Vision</span>
            <span>React</span>
            <span>FastAPI</span>
            <span>Docker</span>
            <span>AWS</span>
            <span>OpenCV</span>
          </div>
        </section>
      </div>
    </div>
  );
}
