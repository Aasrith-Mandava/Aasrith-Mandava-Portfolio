import { useNavigate } from 'react-router-dom';

export default function ProjectSonarAgent() {
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
                <div className="project-icon" style={{ background: 'linear-gradient(145deg, #f97316 0%, #ef4444 100%)', width: '80px', height: '80px', borderRadius: '20px' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="16 18 22 12 16 6"></polyline>
                        <polyline points="8 6 2 12 8 18"></polyline>
                    </svg>
                </div>
                <div>
                    <h1>SonarAgent</h1>
                    <p className="detail-role">AI-Powered Code Remediation</p>
                    <p className="detail-period">Tools: SonarQube, MCP, RAG, LangSmith</p>
                </div>
            </div>

            <div className="detail-content">
                <section>
                    <h2>Overview</h2>
                    <p>SonarAgent is a 4-agent pipeline built on FastAPI that autonomously scans repositories through SonarQube, generates code fixes, scores them for regressions, and opens GitHub PRs — cutting fix time by 85%. The system is connected to 4 LLM providers with per-agent model switching and full LangSmith observability.</p>
                </section>

                <section>
                    <h2>Key Features</h2>
                    <ul>
                        <li>4-agent pipeline: Scanner → Fixer → Reviewer → PR Creator for end-to-end code remediation</li>
                        <li>SonarQube integration for automated code quality scanning and issue detection</li>
                        <li>AI-powered code fix generation with regression scoring before PR creation</li>
                        <li>Autonomous GitHub PR generation with fixes applied to the correct branches</li>
                        <li>Per-agent model switching across 4 LLM providers for optimal performance per task</li>
                        <li>LangSmith observability tracking every call and decision point across the pipeline</li>
                        <li>85% reduction in fix time and 70% reduction in investigation time</li>
                    </ul>
                </section>

                <section>
                    <h2>Technical Implementation</h2>
                    <ul>
                        <li>Built deterministic multi-agent pipeline on FastAPI with stage-gated orchestration</li>
                        <li>Integrated SonarQube via MCP server for real-time code quality analysis and issue extraction</li>
                        <li>Connected LangChain to 4 LLM providers (OpenAI, Gemini, Anthropic, etc.) with per-agent model routing</li>
                        <li>Implemented RAG-based context retrieval for generating accurate, context-aware code fixes</li>
                        <li>Built regression scoring system to validate fixes before autonomous PR generation</li>
                        <li>Integrated LangSmith for full pipeline observability and debugging</li>
                    </ul>
                </section>

                <section>
                    <h2>Technologies Used</h2>
                    <div className="tech-tags">
                        <span>SonarQube</span>
                        <span>MCP</span>
                        <span>RAG</span>
                        <span>LangSmith</span>
                        <span>LangChain</span>
                        <span>FastAPI</span>
                        <span>Python</span>
                        <span>GitHub API</span>
                    </div>
                </section>
            </div>
        </div>
    );
}
