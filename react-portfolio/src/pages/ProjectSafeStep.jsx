import { useNavigate } from 'react-router-dom';

export default function ProjectSafeStep() {
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
                <div className="project-icon" style={{ background: 'linear-gradient(145deg, #3b82f6 0%, #22c55e 100%)', width: '80px', height: '80px', borderRadius: '20px' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                    </svg>
                </div>
                <div>
                    <h1>SafeStep</h1>
                    <p className="detail-role">Real-time Safety Intelligence</p>
                    <p className="detail-period">Tools: Scikit-learn, XGBoost, Python, Flask, Azure</p>
                </div>
            </div>

            <div className="detail-content">
                <section>
                    <h2>Overview</h2>
                    <p>SafeStep is a real-time safety intelligence platform that processes 48 GB of fragmented federal crime data through a Python ETL pipeline, normalizing records from 7,700+ agencies into a compact 43 MB dataset ready for ML inference. The async API layer queries 11 data sources in parallel, bringing response time from 8+ seconds down to under 2 seconds.</p>
                </section>

                <section>
                    <h2>Key Features</h2>
                    <ul>
                        <li>Python ETL pipeline processing 48 GB of fragmented federal crime data</li>
                        <li>Record normalization from 7,700+ agencies into a compact 43 MB ML-ready dataset</li>
                        <li>FastAPI async API layer with asyncio.gather() for parallel data source queries</li>
                        <li>11 data sources queried in parallel — response time from 8+ seconds to under 2 seconds</li>
                        <li>ML-powered risk scoring and crime trend analysis</li>
                        <li>Real-time safety intelligence for location-based queries</li>
                    </ul>
                </section>

                <section>
                    <h2>Technical Implementation</h2>
                    <ul>
                        <li>Designed and built Python ETL pipeline for ingesting and normalizing 48 GB of heterogeneous federal crime data</li>
                        <li>Compressed 7,700+ agency profiles from raw data to optimized 43 MB format for low-latency inference</li>
                        <li>Built async FastAPI backend with asyncio.gather() parallelizing 11 concurrent data source queries</li>
                        <li>Trained Scikit-learn and XGBoost models for crime pattern detection and risk scoring</li>
                        <li>Deployed on Azure with Flask for production-ready serving</li>
                    </ul>
                </section>

                <section>
                    <h2>Technologies Used</h2>
                    <div className="tech-tags">
                        <span>Scikit-learn</span>
                        <span>XGBoost</span>
                        <span>Python</span>
                        <span>Flask</span>
                        <span>Azure</span>
                        <span>FastAPI</span>
                        <span>asyncio</span>
                        <span>ETL Pipeline</span>
                        <span>Pandas</span>
                    </div>
                </section>
            </div>
        </div>
    );
}
