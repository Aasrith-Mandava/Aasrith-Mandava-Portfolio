import { useEffect, useRef } from 'react';

const experiences = [
  {
    id: 'gsu',
    company: 'Georgia State University',
    logo: 'GSU',
    logoClass: 'logo-gsu',
    description: 'Building next-gen research applications',
    role: 'Graduate Research Assistant',
    period: 'Aug 2024 – Present',
    details: [
      'Redesigned PostgreSQL execution plans using indexing strategies, improving query performance by 3x.',
      'Built real-time synchronization pipelines using WebSockets with Azure AD and OAuth protocols.',
      'Modularized legacy frontend code into reusable React components, reducing production defects by 35%.'
    ]
  },
  {
    id: 'svap',
    company: 'SVAP Technologies',
    logo: 'SV',
    logoClass: 'logo-svap',
    description: 'AI-driven synthetic media solutions',
    role: 'Software Developer Intern',
    period: 'May 2025 – Aug 2025',
    details: [
      'Developed a production-grade Next.js application integrating Play.ht APIs for AI voice cloning.',
      'Optimized Node.js inference services with in-memory caching, achieving <300ms latency.',
      'Designed scalable ETL pipelines to ingest and validate raw audio data for AI training.'
    ]
  },
  {
    id: 'isro',
    company: 'Indian Space Research Organization',
    logo: 'ISRO',
    logoClass: 'logo-isro',
    description: 'Enterprise-grade systems for space missions',
    role: 'Software Engineer',
    period: 'May 2022 – Aug 2024',
    details: [
      'Engineered enterprise RESTful services using Spring Boot, managing sensitive donor data.',
      'Implemented token-based authentication and optimized SQL queries, improving response time by 30%.',
      'Maintained strict compliance with government security standards for high-availability systems.'
    ]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="fade-in">
      <div className="section-header">
        <h2 className="section-title">Experience</h2>
      </div>
      <div className="experience-tree stagger-children">
        {experiences.map((exp) => (
          <div className="tree-node" key={exp.id}>
            <div className="experience-card">
              <div className="experience-info">
                <h3>{exp.company}</h3>
                <p className="description">{exp.description}</p>
                <div>
                  <span className="role">{exp.role}</span>
                  <span className="period">{exp.period}</span>
                </div>
                {exp.details && (
                  <ul className="experience-details">
                    {exp.details.map((detail, index) => (
                      <li key={index}>{detail}</li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
