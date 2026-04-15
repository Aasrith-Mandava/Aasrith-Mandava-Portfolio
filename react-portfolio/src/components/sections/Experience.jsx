const experiences = [
  {
    id: 'gsu',
    company: 'Georgia State University',
    logo: 'GSU',
    logoClass: 'logo-gsu',
    description: 'AI/ML research in medical imaging and healthcare systems',
    role: 'Graduate Research Assistant – AIML Engineer',
    period: 'Aug 2024 – Present',
    details: [
      'Trained a Vision-Language Transformer on 7K+ radiology image-report pairs, using cross-attention between a ViT encoder and GPT-2 decoder to generate free-text reports from chest X-rays.',
      'Fine-tuned multi-modal LLMs with PyTorch and LoRA for radiology report generation, scored 13.4% above VisionGPT on BLEU-4 at 1.6s/image inference.',
      'Built an MCP server that connects healthcare databases to LLM agents for real-time tool-calling, cut manual query latency by 60%.'
    ]
  },
  {
    id: 'isro',
    company: 'Indian Space Research Organization',
    logo: 'ISRO',
    logoClass: 'logo-isro',
    description: 'ML-driven payroll analytics and intelligent automation',
    role: 'ML Intern',
    period: 'Jan 2024 – Apr 2024',
    details: [
      'Built a time series model on 3 years of payroll and budget data to forecast monthly departmental spend, improved planning accuracy by 8%.',
      'Trained Random Forest and XGBoost models to flag anomalous payroll transactions across 2,000 employee records, caught patterns that saved around 30% in disbursement errors.',
      'Trained a BERT-based classifier on historical payroll tickets to auto-route employee queries across HR, benefits, and finance teams, handled around 300 tickets/week with 87% routing accuracy.'
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
                      <li key={`detail-${index}`}>{detail}</li>
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
