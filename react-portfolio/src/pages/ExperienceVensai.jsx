import { useNavigate } from 'react-router-dom';

export default function ExperienceVensai() {
    const navigate = useNavigate();

    return (
        <div className="experience-detail">
            <button onClick={() => navigate('/')} className="back-button">← Back to Portfolio</button>

            <div className="detail-header">
                <div className="detail-logo logo-vensai">VT</div>
                <div>
                    <h1>Vensai Technologies (Client- Ceva Logistics)</h1>
                    <p className="detail-role">Software Developer Intern (Co-op)</p>
                    <p className="detail-period">2024</p>
                </div>
            </div>

            <div className="detail-content">
                <section>
                    <h2>Overview</h2>
                    <p>Designed and developed an end-to-end AI-powered HR onboarding chatbot using Agentic RAG with multi-agent orchestration via Autogen framework, enabling dynamic conversation flows and task delegation among specialized agents.</p>
                </section>

                <section>
                    <h2>Key Projects & Achievements</h2>
                    <ul>
                        <li>Designed and developed an end-to-end AI-powered HR onboarding chatbot using Agentic RAG</li>
                        <li>Implemented multi-agent orchestration via Autogen framework, enabling dynamic conversation flows and task delegation among specialized agents</li>
                        <li>Spearheaded an SDLC Automation Agent utilizing Transformer-based architectures (RoBERTa/BERT) to autonomously detect and classify critical system issues from 500+ weekly logs</li>
                        <li>Built an LLM microservice using Amazon Bedrock and AWS Lambda integrated via API Gateway to automate 2 different Internal APIs workflows</li>
                        <li>Reduced content analysis time by 75% and saved 3 engineering days per week</li>
                    </ul>
                </section>

                <section>
                    <h2>Technical Impact</h2>
                    <ul>
                        <li>Automated manual HR and SDLC processes using LLMs and Agentic workflows</li>
                        <li>Detected and classified critical system issues autonomously from high volume logs</li>
                        <li>Significantly accelerated analysis and workflow execution time</li>
                    </ul>
                </section>

                <section>
                    <h2>Technologies Used</h2>
                    <div className="tech-tags">
                        <span>Agentic RAG</span>
                        <span>Autogen</span>
                        <span>RoBERTa/BERT</span>
                        <span>Amazon Bedrock</span>
                        <span>AWS Lambda</span>
                        <span>API Gateway</span>
                        <span>Python</span>
                        <span>LLMs</span>
                    </div>
                </section>
            </div>
        </div>
    );
}
