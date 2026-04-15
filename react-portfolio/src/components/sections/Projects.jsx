const projects = [
  {
    name: 'NL2Dash',
    tagline: 'Natural language to unified dashboards — BI turnaround from days to under 10 seconds',
    description: 'Built a multi-agent Text-to-SQL pipeline (LangChain/LangGraph) with vector-based schema linking, predictive modeling, and AST-based SQL ranking across 4 dialects and 50+ table schemas. Includes a D3.js code generation engine producing 3 persona-specific React dashboards (CEO/CFO/CTO) from a single natural language prompt with autonomous error recovery.',
    tech: ['LangChain', 'LangGraph', 'D3.js', 'React', 'Text-to-SQL'],
    gradient: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
        <line x1="3" y1="9" x2="21" y2="9"></line>
        <line x1="9" y1="21" x2="9" y2="9"></line>
      </svg>
    )
  },
  {
    name: 'AURA',
    tagline: 'Multimodal agentic healthcare ecosystem with LangGraph orchestration & Agentic RAG',
    description: 'Architected a multi-agent ecosystem using LangGraph to orchestrate 5 specialized AI agents (Diagnostic, Diet, Insurance), utilizing Agentic RAG and ChromaDB for context-aware, zero-hallucination clinical triage. Features a self-learning Search Agent that autonomously retrieves, verifies, and ingests new knowledge from CMS.gov and VA.gov.',
    tech: ['Python', 'LangGraph', 'ViTs', 'FastAPI', 'React', 'ChromaDB'],
    gradient: 'linear-gradient(135deg, #4dd9c0 0%, #8b5cf6 100%)',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
      </svg>
    )
  },
  {
    name: 'SonarAgent',
    tagline: 'AI-powered code remediation pipeline with autonomous GitHub PR generation',
    description: 'Built a 4-agent pipeline on FastAPI that scans repos through SonarQube, generates code fixes, scores them for regressions, and opens GitHub PRs autonomously — cutting fix time by 85%. Connected LangChain to 4 LLM providers with per-agent model switching and LangSmith observability, cutting investigation time by 70%.',
    tech: ['SonarQube', 'MCP', 'RAG', 'LangSmith', 'FastAPI', 'LangChain'],
    gradient: 'linear-gradient(135deg, #f97316 0%, #ef4444 100%)',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6"></polyline>
        <polyline points="8 6 2 12 8 18"></polyline>
      </svg>
    )
  },
  {
    name: 'BotStudio',
    tagline: 'Multi-tenant RAG platform with isolated vector storage and sub-100ms retrieval',
    description: 'Built a multi-tenant chatbot platform with isolated Zilliz vector storage per account and a chunking/embedding pipeline that handles 10K+ chunks at sub-100ms retrieval.',
    tech: ['FastAPI', 'Zilliz', 'RAG', 'LLM', 'Embeddings'],
    gradient: 'linear-gradient(135deg, #11998e 0%, #38ef7d 100%)',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
      </svg>
    )
  },
  {
    name: 'SafeStep',
    tagline: 'Real-time safety intelligence with 48 GB ETL pipeline & parallel API layer',
    description: 'Processed 48 GB of fragmented federal crime data through a Python ETL pipeline, normalizing records from 7,700+ agencies into a compact 43 MB dataset. Built the API layer with FastAPI using asyncio.gather() to query 11 data sources in parallel — response time went from 8+ seconds to under 2 seconds.',
    tech: ['Scikit-learn', 'XGBoost', 'Python', 'Flask', 'Azure'],
    gradient: 'linear-gradient(135deg, #3b82f6 0%, #22c55e 100%)',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
      </svg>
    )
  },
  {
    name: 'DocuChat',
    tagline: 'RAG Document Q&A system with sub-3 second grounded responses',
    description: 'Built a RAG Q&A system with LangChain, FAISS, and Google Gemini that answers questions grounded in uploaded PDFs, deployed on HuggingFace Spaces with sub-3 second responses.',
    tech: ['Python', 'LangChain', 'FAISS', 'HuggingFace', 'Google Gemini'],
    gradient: 'linear-gradient(135deg, #a855f7 0%, #ec4899 100%)',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
        <polyline points="14 2 14 8 20 8"></polyline>
        <line x1="16" y1="13" x2="8" y2="13"></line>
        <line x1="16" y1="17" x2="8" y2="17"></line>
        <polyline points="10 9 9 9 8 9"></polyline>
      </svg>
    )
  }
];

export default function Projects() {
  return (
    <section id="projects" className="fade-in">
      <div className="section-header">
        <h2 className="section-title">Projects</h2>
      </div>
      <div className="projects-grid stagger-children">
        {projects.map((project) => (
          <div key={project.name} className="project-card">
            <div className="project-icon" style={{ background: project.gradient }}>
              {project.icon}
            </div>
            <a href="https://github.com/Aasrith-Mandava" target="_blank" rel="noopener noreferrer" className="github-link" aria-label="View on GitHub">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
            </a>
            <h3>{project.name}</h3>
            <p className="tagline">{project.tagline}</p>
            <p className="description">{project.description}</p>
            <div className="project-tech">
              {project.tech.map((tech) => (
                <span key={tech}>{tech}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
