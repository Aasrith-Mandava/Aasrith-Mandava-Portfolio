const skillCategories = [
  {
    title: 'Languages',
    skills: ['Python', 'Java', 'SQL', 'JavaScript']
  },
  {
    title: 'Databases',
    skills: ['PostgreSQL', 'OracleSQL']
  },
  {
    title: 'Libraries',
    skills: ['NumPy', 'Pandas', 'Matplotlib', 'Scikit-learn', 'PyTorch', 'TensorFlow', 'Keras']
  },
  {
    title: 'AI & ML',
    skills: ['LangChain', 'LangGraph', 'LangSmith', 'REST APIs', 'Fine Tuning', 'Microservices (FastAPI, MCP)', 'Transformers']
  },
  {
    title: 'Cloud & DevOps',
    skills: ['AWS (EC2, Bedrock, Lambda, SageMaker)', 'Docker', 'CI/CD', 'Git']
  },
  {
    title: 'Competencies',
    skills: ['ETL Pipelines', 'Large Language Models', 'VectorDB', 'Prompt Engineering']
  },
  {
    title: 'AI Tools',
    skills: ['GitHub Copilot', 'Claude Code', 'LangSmith', 'OpenAI', 'Google Gemini']
  },
  {
    title: 'Certifications',
    skills: ['Foundations of LangChain', 'Foundations of LangGraph']
  }
];

export default function Skills() {
  return (
    <section id="skills" className="fade-in">
      <div className="section-header">
        <h2 className="section-title">Skills</h2>
      </div>
      <div className="skills-grid">
        {skillCategories.map((category) => (
          <div key={category.title} className="skill-category">
            <h3>{category.title}</h3>
            <div className="skill-tags">
              {category.skills.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
