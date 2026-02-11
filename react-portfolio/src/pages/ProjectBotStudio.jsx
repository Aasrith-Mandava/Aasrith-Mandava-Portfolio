import { useNavigate } from 'react-router-dom';

export default function ProjectBotStudio() {
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
        <div className="project-icon" style={{ background: 'linear-gradient(145deg, #11998e 0%, #38ef7d 100%)', width: '80px', height: '80px', borderRadius: '20px' }}>
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
          </svg>
        </div>
        <div>
          <h1>Bot Studio</h1>
          <p className="detail-role">Multi-Tenant AI Chatbot Platform</p>
          <p className="detail-period">Personal Project | 2024</p>
        </div>
      </div>

      <div className="detail-content">
        <section>
          <h2>Overview</h2>
          <p>Bot Studio is a comprehensive multi-tenant conversational AI platform that enables businesses to create, deploy, and manage intelligent chatbots. With support for 10,000+ documents per bot, it provides enterprise-grade RAG capabilities for accurate, context-aware responses.</p>
        </section>

        <section>
          <h2>Key Features</h2>
          <ul>
            <li>Multi-tenant architecture supporting unlimited organizations and bots</li>
            <li>Document ingestion system handling 10,000+ documents per chatbot</li>
            <li>Advanced RAG implementation for accurate information retrieval</li>
            <li>Real-time chat interface with streaming responses</li>
            <li>Admin dashboard for bot management and analytics</li>
            <li>Custom training on domain-specific documents</li>
            <li>API endpoints for seamless integration</li>
            <li>User authentication and role-based access control</li>
          </ul>
        </section>

        <section>
          <h2>Technical Implementation</h2>
          <ul>
            <li>Built scalable backend with FastAPI and async processing</li>
            <li>Implemented Next.js frontend with server-side rendering</li>
            <li>Integrated Zilliz vector database for efficient similarity search</li>
            <li>Used Supabase for authentication and PostgreSQL database</li>
            <li>Designed document processing pipeline with chunking and embedding</li>
            <li>Implemented caching layer for improved response times</li>
            <li>Built real-time chat with WebSocket connections</li>
          </ul>
        </section>

        <section>
          <h2>Technologies Used</h2>
          <div className="tech-tags">
            <span>FastAPI</span>
            <span>Next.js</span>
            <span>Zilliz</span>
            <span>Supabase</span>
            <span>PostgreSQL</span>
            <span>RAG</span>
            <span>LLM</span>
            <span>WebSocket</span>
            <span>Docker</span>
          </div>
        </section>
      </div>
    </div>
  );
}
