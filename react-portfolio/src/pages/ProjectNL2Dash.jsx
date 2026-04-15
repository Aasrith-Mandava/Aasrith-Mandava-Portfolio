import { useNavigate } from 'react-router-dom';

export default function ProjectNL2Dash() {
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
                <div className="project-icon" style={{ background: 'linear-gradient(145deg, #6366f1 0%, #8b5cf6 100%)', width: '80px', height: '80px', borderRadius: '20px' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                        <line x1="3" y1="9" x2="21" y2="9"></line>
                        <line x1="9" y1="21" x2="9" y2="9"></line>
                    </svg>
                </div>
                <div>
                    <h1>NL2Dash</h1>
                    <p className="detail-role">Natural Language to Unified Dashboards</p>
                    <p className="detail-period">Personal Project</p>
                </div>
            </div>

            <div className="detail-content">
                <section>
                    <h2>Overview</h2>
                    <p>NL2Dash is a multi-agent Text-to-SQL pipeline that transforms natural language prompts into fully functional, persona-specific React dashboards. The system leverages LangChain and LangGraph to perform vector-based schema linking, predictive modeling, and AST-based SQL ranking across 4 SQL dialects and 50+ table schemas — cutting BI turnaround from days to under 10 seconds.</p>
                </section>

                <section>
                    <h2>Key Features</h2>
                    <ul>
                        <li>Multi-agent Text-to-SQL pipeline with vector-based schema linking across 50+ table schemas</li>
                        <li>AST-based SQL ranking and validation across 4 SQL dialects</li>
                        <li>D3.js code generation engine producing React dashboards from natural language prompts</li>
                        <li>3 persona-specific dashboards (CEO/CFO/CTO) from a single prompt</li>
                        <li>Autonomous error recovery for reliable end-to-end pipeline execution</li>
                        <li>Predictive modeling integrated within the BI generation pipeline</li>
                        <li>Eliminates 3-team manual BI process with fully autonomous generation</li>
                    </ul>
                </section>

                <section>
                    <h2>Technical Implementation</h2>
                    <ul>
                        <li>Built multi-agent orchestration with LangChain/LangGraph for schema discovery, SQL generation, and dashboard rendering</li>
                        <li>Implemented vector-based schema linking for accurate table/column selection across complex schemas</li>
                        <li>Designed AST-based SQL ranking system to evaluate and select optimal queries across PostgreSQL, MySQL, SQLite, and MSSQL</li>
                        <li>Developed D3.js code generation engine that translates SQL results into interactive React chart components</li>
                        <li>Built autonomous error recovery system that detects, diagnoses, and retries failed pipeline stages</li>
                    </ul>
                </section>

                <section>
                    <h2>Technologies Used</h2>
                    <div className="tech-tags">
                        <span>LangChain</span>
                        <span>LangGraph</span>
                        <span>D3.js</span>
                        <span>React</span>
                        <span>Text-to-SQL</span>
                        <span>Python</span>
                        <span>Vector Search</span>
                        <span>AST Parsing</span>
                    </div>
                </section>
            </div>
        </div>
    );
}
