const skillCategories = [
  {
    title: 'Languages',
    skills: ['Java', 'Python', 'SQL', 'TypeScript']
  },
  {
    title: 'Frameworks & Libraries',
    skills: ['Spring Boot', 'React', 'Next.js', 'FastAPI', 'Node.js', 'WebSockets']
  },
  {
    title: 'Databases',
    skills: ['PostgreSQL', 'MySQL']
  },
  {
    title: 'AI & ML',
    skills: ['RAG', 'LLM Integration', 'Vector Databases', 'Semantic Search', 'Embeddings']
  },
  {
    title: 'Cloud & DevOps',
    skills: ['AWS EC2', 'RDS', 'ElastiCache', 'Docker', 'Kafka', 'Elasticsearch', 'Git', 'Azure AD']
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
