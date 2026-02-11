import { useNavigate } from 'react-router-dom';

export default function ProjectHelpPro() {
  const navigate = useNavigate();

  return (
    <div className="experience-detail">
      <div className="button-group">
        <button onClick={() => navigate('/')} className="back-button">← Back to Portfolio</button>
        <a href="https://github.com/Aasrith-Mandava" target="_blank" rel="noopener noreferrer" className="github-link">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
          </svg>
          View on GitHub
        </a>
      </div>
      
      <div className="detail-header">
        <div className="project-icon" style={{ background: 'linear-gradient(145deg, #f093fb 0%, #f5576c 100%)', width: '80px', height: '80px', borderRadius: '20px' }}>
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
            <circle cx="9" cy="7" r="4"></circle>
            <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
            <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
          </svg>
        </div>
        <div>
          <h1>HelpPro</h1>
          <p className="detail-role">Real-Time Collaboration Platform</p>
          <p className="detail-period">Personal Project | 2024</p>
        </div>
      </div>

      <div className="detail-content">
        <section>
          <h2>Overview</h2>
          <p>HelpPro is a real-time collaboration platform that connects developers with GitHub bounties and project opportunities. It features live chat, project management tools, and seamless GitHub integration for tracking and managing open-source contributions.</p>
        </section>

        <section>
          <h2>Key Features</h2>
          <ul>
            <li>Real-time messaging with Socket.IO for instant communication</li>
            <li>GitHub bounties integration for tracking open issues and rewards</li>
            <li>Project collaboration tools with task management</li>
            <li>User profiles with GitHub statistics and contributions</li>
            <li>Live notifications for project updates and messages</li>
            <li>Search and filter system for finding relevant projects</li>
            <li>Payment integration for bounty rewards</li>
            <li>Code snippet sharing with syntax highlighting</li>
          </ul>
        </section>

        <section>
          <h2>Technical Implementation</h2>
          <ul>
            <li>Built high-performance backend with Fastify framework</li>
            <li>Implemented type-safe database layer with Drizzle ORM</li>
            <li>Integrated Socket.IO for real-time bidirectional communication</li>
            <li>Created responsive React frontend with modern UI components</li>
            <li>Connected GitHub API for repository and issue management</li>
            <li>Designed efficient database schema with PostgreSQL</li>
            <li>Implemented JWT authentication for secure user sessions</li>
          </ul>
        </section>

        <section>
          <h2>Technologies Used</h2>
          <div className="tech-tags">
            <span>Fastify</span>
            <span>Drizzle ORM</span>
            <span>Socket.IO</span>
            <span>React</span>
            <span>PostgreSQL</span>
            <span>GitHub API</span>
            <span>JWT</span>
            <span>TypeScript</span>
          </div>
        </section>
      </div>
    </div>
  );
}
