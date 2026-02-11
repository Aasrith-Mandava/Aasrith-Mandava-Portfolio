import { useNavigate } from 'react-router-dom';

export default function ProjectMindVault() {
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
        <div className="project-icon" style={{ background: 'linear-gradient(145deg, #667eea 0%, #764ba2 100%)', width: '80px', height: '80px', borderRadius: '20px' }}>
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
            <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
            <line x1="12" y1="22.08" x2="12" y2="12"></line>
          </svg>
        </div>
        <div>
          <h1>MindVault</h1>
          <p className="detail-role">AI-Powered Browser History Search</p>
          <p className="detail-period">Personal Project | 2024</p>
        </div>
      </div>

      <div className="detail-content">
        <section>
          <h2>Overview</h2>
          <p>MindVault is an intelligent Chrome extension that revolutionizes how you search through your browsing history. Using advanced RAG (Retrieval-Augmented Generation) and LLM embeddings, it enables semantic search capabilities, allowing you to find websites based on content meaning rather than just keywords.</p>
        </section>

        <section>
          <h2>Key Features</h2>
          <ul>
            <li>Semantic search using natural language queries to find relevant browsing history</li>
            <li>RAG implementation for context-aware search results</li>
            <li>Vector database integration for efficient similarity search</li>
            <li>Real-time indexing of browsing history with LLM embeddings</li>
            <li>Chrome extension with intuitive user interface</li>
            <li>Privacy-focused: all data stored locally</li>
            <li>Fast retrieval with optimized vector similarity algorithms</li>
          </ul>
        </section>

        <section>
          <h2>Technical Implementation</h2>
          <ul>
            <li>Built Chrome extension using JavaScript and Chrome APIs</li>
            <li>Implemented RAG pipeline with Python backend</li>
            <li>Integrated vector database (Pinecone/Chroma) for embedding storage</li>
            <li>Used OpenAI/Hugging Face models for text embeddings</li>
            <li>Designed efficient indexing system for real-time updates</li>
            <li>Optimized search performance with caching strategies</li>
          </ul>
        </section>

        <section>
          <h2>Technologies Used</h2>
          <div className="tech-tags">
            <span>Python</span>
            <span>LLM</span>
            <span>RAG</span>
            <span>Vector DB</span>
            <span>Chrome Extension</span>
            <span>JavaScript</span>
            <span>OpenAI API</span>
            <span>FastAPI</span>
          </div>
        </section>
      </div>
    </div>
  );
}
