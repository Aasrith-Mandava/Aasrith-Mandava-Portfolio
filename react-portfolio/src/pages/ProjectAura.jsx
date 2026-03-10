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
                    <p className="detail-role">Multi-Agent Healthcare AI Platform</p>
                    <p className="detail-period">Personal Project | 2024</p>
                </div>
            </div>

            <div className="detail-content">
                <section>
                    <h2>Overview</h2>
                    <p>AURA is a comprehensive multi-agent healthcare AI platform built on LangGraph, orchestrating 6 specialist agents for intelligent clinical triage. The system features a React + TypeScript frontend and preserves patient context across multi-turn conversations, enabling seamless handoffs between diagnostic, dietary, insurance, and other specialist agents.</p>
                </section>

                <section>
                    <h2>Key Features</h2>
                    <ul>
                        <li>LangGraph multi-agent routing system orchestrating handoffs between 6 specialist agents (Diagnostic, Diet, Insurance, and more) while preserving patient context across multi-turn conversations</li>
                        <li>Real-time Agentic RAG insurance advisor with ChromaDB vector storage and a self-learning Search Agent over CMS.gov and VA.gov</li>
                        <li>Multi-agent ecosystem utilizing Agentic RAG and ChromaDB for context-aware, zero-hallucination clinical triage</li>
                        <li>IRIS — a Vision Transformer (ViT) diagnostic engine predicting 10 systemic health risks from retinal scans</li>
                        <li>Gemini 3 Pro LLM backend optimized for real-time, production-ready inference</li>
                        <li>React + TypeScript frontend with seamless multi-agent conversation experience</li>
                    </ul>
                </section>

                <section>
                    <h2>Technical Implementation</h2>
                    <ul>
                        <li>Architected multi-agent orchestration using LangGraph with intelligent routing and context-preserving handoffs</li>
                        <li>Built Agentic RAG pipeline with ChromaDB for vector storage and semantic retrieval across healthcare data sources</li>
                        <li>Developed self-learning Search Agent capable of querying CMS.gov and VA.gov for real-time insurance information</li>
                        <li>Engineered IRIS Vision Transformer diagnostic engine with optimized inference pipeline for retinal scan analysis</li>
                        <li>Integrated Gemini 3 Pro LLM backend for production-ready, low-latency AI responses</li>
                        <li>Designed zero-hallucination architecture with grounded retrieval and fact-checking across all agent interactions</li>
                    </ul>
                </section>

                <section>
                    <h2>Technologies Used</h2>
                    <div className="tech-tags">
                        <span>LangGraph</span>
                        <span>React</span>
                        <span>TypeScript</span>
                        <span>ChromaDB</span>
                        <span>Gemini Pro</span>
                        <span>Vision Transformer</span>
                        <span>Agentic RAG</span>
                        <span>Python</span>
                        <span>FastAPI</span>
                    </div>
                </section>
            </div>
        </div>
    );
}
