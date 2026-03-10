import { useNavigate } from 'react-router-dom';

export default function ProjectLumos() {
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
                        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
                    </svg>
                </div>
                <div>
                    <h1>Lumos</h1>
                    <p className="detail-role">Federal Crime Analytics & ML Platform</p>
                    <p className="detail-period">Personal Project | 2024</p>
                </div>
            </div>

            <div className="detail-content">
                <section>
                    <h2>Overview</h2>
                    <p>Lumos is a high-performance federal crime analytics platform that ingests and processes 48 GB of raw crime data across 51 jurisdictions. The system features an async FastAPI backend parallelizing 11 data sources with Gemini AI validation and ML-powered caching, delivering sub-2-second response times under heavy load.</p>
                </section>

                <section>
                    <h2>Key Features</h2>
                    <ul>
                        <li>Python ETL pipeline ingesting 48 GB of raw federal crime data across 51 jurisdictions, normalizing schemas and compressing 7,717 agency profiles to 43 MB for low-latency ML inference</li>
                        <li>Async FastAPI backend parallelizing 11 data sources via asyncio.gather() with Gemini AI validation</li>
                        <li>ML LRU caching system with 10K entries sustaining sub-2-second responses under load</li>
                        <li>Schema normalization across diverse jurisdiction data formats</li>
                        <li>Real-time crime trend analysis and prediction capabilities</li>
                        <li>Production-ready API with comprehensive error handling and monitoring</li>
                    </ul>
                </section>

                <section>
                    <h2>Technical Implementation</h2>
                    <ul>
                        <li>Designed and built ETL pipeline for processing 48 GB of heterogeneous federal crime data with schema normalization</li>
                        <li>Implemented async data parallelization using asyncio.gather() across 11 concurrent data sources</li>
                        <li>Integrated Gemini AI for intelligent data validation and anomaly detection in crime datasets</li>
                        <li>Built ML-powered LRU caching layer with 10K entry capacity for low-latency inference</li>
                        <li>Compressed 7,717 agency profiles from raw data to 43 MB optimized format</li>
                        <li>Engineered FastAPI endpoints with async request handling for sustained high-throughput performance</li>
                    </ul>
                </section>

                <section>
                    <h2>Technologies Used</h2>
                    <div className="tech-tags">
                        <span>Python</span>
                        <span>FastAPI</span>
                        <span>asyncio</span>
                        <span>Gemini AI</span>
                        <span>Machine Learning</span>
                        <span>Pandas</span>
                        <span>ETL Pipeline</span>
                        <span>LRU Cache</span>
                    </div>
                </section>
            </div>
        </div>
    );
}
