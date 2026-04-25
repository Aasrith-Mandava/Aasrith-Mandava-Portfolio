import { useRef, useEffect } from 'react';

const projects = [
  {
    name: 'NL2Dash',
    tagline: 'Natural language to unified dashboards — BI turnaround from days to under 10 seconds',
    description: 'Multi-agent Text-to-SQL pipeline with vector-based schema linking, predictive modeling, and AST-based SQL ranking across 4 dialects and 50+ table schemas. D3.js code generation engine producing 3 persona-specific React dashboards from a single prompt.',
    tech: ['LangChain', 'LangGraph', 'D3.js', 'React', 'Text-to-SQL'],
    gradient: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
    featured: true,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" /><line x1="3" y1="9" x2="21" y2="9" /><line x1="9" y1="21" x2="9" y2="9" />
      </svg>
    )
  },
  {
    name: 'AURA',
    tagline: 'Multimodal agentic healthcare ecosystem with LangGraph orchestration & Agentic RAG',
    description: 'Multi-agent ecosystem using LangGraph to orchestrate 5 specialized AI agents with Agentic RAG and ChromaDB for context-aware, zero-hallucination clinical triage.',
    tech: ['Python', 'LangGraph', 'ViTs', 'FastAPI', 'React', 'ChromaDB'],
    gradient: 'linear-gradient(135deg, #4dd9c0 0%, #8b5cf6 100%)',
    featured: true,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    )
  },
  {
    name: 'SonarAgent',
    tagline: 'AI-powered code remediation pipeline with autonomous GitHub PR generation',
    description: '4-agent pipeline scanning repos through SonarQube, generating fixes, scoring for regressions, and opening GitHub PRs autonomously — cutting fix time by 85%.',
    tech: ['SonarQube', 'MCP', 'RAG', 'LangSmith', 'FastAPI'],
    gradient: 'linear-gradient(135deg, #f97316 0%, #ef4444 100%)',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
      </svg>
    )
  },
  {
    name: 'BotStudio',
    tagline: 'Multi-tenant RAG platform with isolated vector storage and sub-100ms retrieval',
    description: 'Multi-tenant chatbot platform with isolated Zilliz vector storage per account and a chunking/embedding pipeline that handles 10K+ chunks at sub-100ms retrieval.',
    tech: ['FastAPI', 'Zilliz', 'RAG', 'LLM', 'Embeddings'],
    gradient: 'linear-gradient(135deg, #11998e 0%, #38ef7d 100%)',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    )
  },
  {
    name: 'SafeStep',
    tagline: 'Real-time safety intelligence with 48 GB ETL pipeline & parallel API layer',
    description: 'Processed 48 GB of federal crime data through a Python ETL pipeline, normalizing records from 7,700+ agencies. Async API queries 11 data sources in parallel — response from 8s to under 2s.',
    tech: ['Scikit-learn', 'XGBoost', 'Python', 'Flask', 'Azure'],
    gradient: 'linear-gradient(135deg, #3b82f6 0%, #22c55e 100%)',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    )
  },
  {
    name: 'DocuChat',
    tagline: 'RAG Document Q&A system with sub-3 second grounded responses',
    description: 'RAG Q&A system with LangChain, FAISS, and Google Gemini that answers questions grounded in uploaded PDFs, deployed on HuggingFace Spaces.',
    tech: ['Python', 'LangChain', 'FAISS', 'HuggingFace', 'Gemini'],
    gradient: 'linear-gradient(135deg, #a855f7 0%, #ec4899 100%)',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
      </svg>
    )
  }
];

function ProjectCard({ project }) {
  const cardRef = useRef(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;
    const handleMove = (e) => {
      const rect = card.getBoundingClientRect();
      card.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
      card.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
    };
    card.addEventListener('mousemove', handleMove);
    return () => card.removeEventListener('mousemove', handleMove);
  }, []);

  return (
    <div ref={cardRef} className={`project-card ${project.featured ? 'featured' : ''}`}>
      <div className="project-card-glow" style={{ background: project.gradient }} />
      <div className="project-card-inner">
        <div className="project-top-row">
          <div className="project-icon" style={{ background: project.gradient }}>
            {project.icon}
          </div>
          <a href="https://github.com/Aasrith-Mandava" target="_blank" rel="noopener noreferrer" className="github-link" aria-label="View on GitHub" onClick={(e) => e.stopPropagation()}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
            </svg>
          </a>
        </div>
        <h3>{project.name}</h3>
        <p className="tagline">{project.tagline}</p>
        <p className="description">{project.description}</p>
        <div className="project-tech">
          {project.tech.map((t) => (
            <span key={t}>{t}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="fade-in">
      <div className="section-header">
        <h2 className="section-title">Projects</h2>
        <span className="section-meta"><span>6</span> built & shipped</span>
      </div>
      <div className="projects-bento stagger-children">
        {projects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </section>
  );
}
