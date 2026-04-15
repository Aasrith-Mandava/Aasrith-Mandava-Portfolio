import { useNavigate } from 'react-router-dom';

export default function ProjectAura() {
    const navigate = useNavigate();

    return (
        <div className="experience-detail">
            <div className="button-group">
                <button onClick={() => navigate('/')} className="back-button">← Back to Portfolio</button>
                <a href="https://github.com/Aasrith-Mandava" target="_blank" rel="noopener noreferrer" className="github-link">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                    View on GitHub
                </a>
            </div>

            <div className="detail-header">
                <div className="project-icon" style={{ background: 'linear-gradient(145deg, #4dd9c0 0%, #8b5cf6 100%)', width: '80px', height: '80px', borderRadius: '20px' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                    </svg>
                </div>
                <div>
                    <h1>AURA</h1>
                    <p className="detail-role">Multimodal Agentic Healthcare Ecosystem</p>
                    <p className="detail-period">Tools: Python, LangGraph, ViTs, FastAPI, React</p>
                </div>
            </div>

            <div className="detail-content">
                <section>
                    <h2>Overview</h2>
                    <p>AURA is a multimodal agentic healthcare ecosystem built on LangGraph, orchestrating 5 specialized AI agents for intelligent clinical triage. The system features Agentic RAG with ChromaDB for context-aware, zero-hallucination responses and a self-learning Search Agent that autonomously retrieves, verifies, and ingests new knowledge from authoritative healthcare sources.</p>
                </section>

                <section>
                    <h2>Key Features</h2>
                    <ul>
                        <li>Architected a multi-agent ecosystem using LangGraph to orchestrate 5 specialized AI agents (Diagnostic, Diet, Insurance), utilizing Agentic RAG and ChromaDB for context-aware, zero-hallucination clinical triage.</li>
                        <li>Developed an Agentic RAG health insurance advisor featuring a self-learning Search Agent that autonomously retrieves, verifies, and ingests new knowledge (CMS.gov, VA.gov), with multi-turn, personalized plan guidance.</li>
                        <li>Multi-agent orchestration with intelligent routing and context-preserving handoffs between specialist agents</li>
                        <li>Vision Transformer (ViT) diagnostic capabilities for medical image analysis</li>
                        <li>React frontend with seamless multi-agent conversation experience</li>
                    </ul>
                </section>

                <section>
                    <h2>Technical Implementation</h2>
                    <ul>
                        <li>Built LangGraph state machine for deterministic multi-agent routing with context preservation</li>
                        <li>Implemented Agentic RAG pipeline with ChromaDB for vector storage and semantic retrieval across healthcare data sources</li>
                        <li>Developed self-learning Search Agent capable of querying CMS.gov and VA.gov for real-time insurance information</li>
                        <li>Designed zero-hallucination architecture with grounded retrieval and fact-checking across all agent interactions</li>
                        <li>FastAPI backend with async processing for production-ready inference</li>
                    </ul>
                </section>

                <section>
                    <h2>Technologies Used</h2>
                    <div className="tech-tags">
                        <span>Python</span>
                        <span>LangGraph</span>
                        <span>Vision Transformers</span>
                        <span>FastAPI</span>
                        <span>React</span>
                        <span>ChromaDB</span>
                        <span>Agentic RAG</span>
                        <span>Gemini Pro</span>
                    </div>
                </section>
            </div>
        </div>
    );
}
