import { useNavigate } from 'react-router-dom';

export default function ExperienceGSU() {
  const navigate = useNavigate();

  return (
    <div className="experience-detail">
      <button onClick={() => navigate('/')} className="back-button">← Back to Portfolio</button>
      
      <div className="detail-header">
        <div className="detail-logo logo-gsu">GSU</div>
        <div>
          <h1>Georgia State University</h1>
          <p className="detail-role">Graduate Research Assistant</p>
          <p className="detail-period">Aug 2024 – Present | Atlanta, GA</p>
        </div>
      </div>

      <div className="detail-content">
        <section>
          <h2>Overview</h2>
          <p>Working as a Graduate Research Assistant at Georgia State University, contributing to cutting-edge research in computer science, artificial intelligence, and software engineering. Collaborating with faculty and fellow researchers on innovative projects that push the boundaries of technology.</p>
        </section>

        <section>
          <h2>Key Projects & Achievements</h2>
          <ul>
            <li>Developed advanced research applications using React, Python, and modern web technologies</li>
            <li>Implemented machine learning models for data analysis and pattern recognition</li>
            <li>Built scalable backend systems to support research data processing</li>
            <li>Conducted experiments and analyzed large datasets for academic publications</li>
            <li>Collaborated with cross-functional research teams on AI/ML initiatives</li>
            <li>Presented research findings at departmental seminars and conferences</li>
            <li>Mentored undergraduate students on software development best practices</li>
          </ul>
        </section>

        <section>
          <h2>Research Areas</h2>
          <ul>
            <li>Artificial Intelligence and Machine Learning applications</li>
            <li>Full-stack web development for research platforms</li>
            <li>Data science and statistical analysis</li>
            <li>Software engineering methodologies</li>
          </ul>
        </section>

        <section>
          <h2>Technologies Used</h2>
          <div className="tech-tags">
            <span>Python</span>
            <span>React</span>
            <span>Machine Learning</span>
            <span>TensorFlow</span>
            <span>Data Analysis</span>
            <span>PostgreSQL</span>
            <span>FastAPI</span>
            <span>Research Methods</span>
          </div>
        </section>
      </div>
    </div>
  );
}
