import { useNavigate } from 'react-router-dom';

export default function ProjectDocuChat() {
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
                <div className="project-icon" style={{ background: 'linear-gradient(145deg, #a855f7 0%, #ec4899 100%)', width: '80px', height: '80px', borderRadius: '20px' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                        <polyline points="14 2 14 8 20 8"></polyline>
                        <line x1="16" y1="13" x2="8" y2="13"></line>
                        <line x1="16" y1="17" x2="8" y2="17"></line>
                        <polyline points="10 9 9 9 8 9"></polyline>
                    </svg>
                </div>
                <div>
                    <h1>DocuChat</h1>
                    <p className="detail-role">RAG Document Q&A System</p>
                    <p className="detail-period">Tools: Python, LangChain, FAISS, HuggingFace, Google Gemini</p>
                </div>
            </div>

            <div className="detail-content">
                <section>
                    <h2>Overview</h2>
                    <p>DocuChat is a RAG-powered document Q&A system that answers questions grounded in uploaded PDFs. Built with LangChain, FAISS, and Google Gemini, it delivers sub-3 second responses and is deployed on HuggingFace Spaces for easy access.</p>
                </section>

                <section>
                    <h2>Key Features</h2>
                    <ul>
                        <li>RAG Q&A system that answers questions grounded in uploaded PDF documents</li>
                        <li>Sub-3 second response times for document-based queries</li>
                        <li>FAISS vector store for efficient semantic similarity search</li>
                        <li>Google Gemini LLM for high-quality, grounded answer generation</li>
                        <li>PDF upload and processing with automatic chunking and embedding</li>
                        <li>Deployed on HuggingFace Spaces for public accessibility</li>
                    </ul>
                </section>

                <section>
                    <h2>Technical Implementation</h2>
                    <ul>
                        <li>Built RAG pipeline with LangChain for document loading, chunking, and retrieval</li>
                        <li>Integrated FAISS for local vector storage and fast similarity search</li>
                        <li>Used HuggingFace embeddings for document chunk vectorization</li>
                        <li>Connected Google Gemini as the LLM backend for grounded answer synthesis</li>
                        <li>Implemented PDF processing pipeline with automatic text extraction and chunking</li>
                        <li>Deployed on HuggingFace Spaces with Gradio/Streamlit interface</li>
                    </ul>
                </section>

                <section>
                    <h2>Technologies Used</h2>
                    <div className="tech-tags">
                        <span>Python</span>
                        <span>LangChain</span>
                        <span>FAISS</span>
                        <span>HuggingFace</span>
                        <span>Google Gemini</span>
                        <span>RAG</span>
                        <span>Embeddings</span>
                        <span>PDF Processing</span>
                    </div>
                </section>
            </div>
        </div>
    );
}
