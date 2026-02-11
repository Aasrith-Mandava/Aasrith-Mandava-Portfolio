const projects = [
  {
    name: 'MindVault',
    tagline: 'Semantic search over your browsing history using RAG and LLM embeddings',
    description: 'A privacy-focused browser extension that ingests browsing history into a local vector database. Uses local LLMs to enable natural language Q&A about past online activities without data leaving the device.',
    tech: ['Python', 'LLM', 'Vector DB', 'Chrome Extension'],
    gradient: 'linear-gradient(135deg, #171717 0%, #404040 100%)',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
        <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
        <line x1="12" y1="22.08" x2="12" y2="12"></line>
      </svg>
    )
  },
  {
    name: 'Bot Studio',
    tagline: 'Multi-tenant conversational AI platform with 10K+ document support',
    description: 'Enterprise-grade chatbot platform supporting multiple tenants. Features a drag-and-drop workflow builder, RAG pipeline with Zilliz Cloud, and seamless integration with knowledge bases.',
    tech: ['FastAPI', 'Next.js', 'Zilliz', 'Supabase'],
    gradient: 'linear-gradient(135deg, #404040 0%, #737373 100%)',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
      </svg>
    )
  },
  {
    name: 'HelpPro',
    tagline: 'Real-time collaboration platform with GitHub bounties integration',
    description: 'A real-time developer assistance platform connecting users with experts. Features live code collaboration, instant bounty payouts via Stripe, and GitHub issue sync.',
    tech: ['Fastify', 'Drizzle ORM', 'Socket.IO', 'React'],
    gradient: 'linear-gradient(135deg, #737373 0%, #a3a3a3 100%)',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
        <circle cx="9" cy="7" r="4"></circle>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
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
