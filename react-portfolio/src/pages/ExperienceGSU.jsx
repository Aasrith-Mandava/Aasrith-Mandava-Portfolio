import { useNavigate } from 'react-router-dom';

export default function ExperienceGSU() {
  const navigate = useNavigate();

  return (
    <div className="experience-detail">
      <button onClick={() => navigate('/')} className="back-button">← Back to Portfolio</button>
      
      <div className="detail-header">
        <div className="detail-logo logo-gsu">GSU</div>
        <div>
          <h1>Georgia State University</h1>
          <p className="detail-role">Graduate Research Assistant – AIML Engineer</p>
          <p className="detail-period">Aug 2024 – Present | Atlanta, GA</p>
        </div>
      </div>

      <div className="detail-content">
        <section>
          <h2>Overview</h2>
          <p>Working as a Graduate Research Assistant and AIML Engineer at Georgia State University, focusing on medical imaging AI, multi-modal language models, and healthcare data systems. Building cutting-edge Vision-Language Transformers for automated radiology report generation and MCP servers for LLM-powered healthcare database interactions.</p>
        </section>

        <section>
          <h2>Key Projects & Achievements</h2>
          <ul>
            <li>Trained a Vision-Language Transformer on 7K+ radiology image-report pairs, using cross-attention between a ViT encoder and GPT-2 decoder to generate free-text reports from chest X-rays.</li>
            <li>Fine-tuned multi-modal LLMs with PyTorch and LoRA for radiology report generation, scored 13.4% above VisionGPT on BLEU-4 at 1.6s/image inference.</li>
            <li>Built an MCP server that connects healthcare databases to LLM agents for real-time tool-calling, cut manual query latency by 60%.</li>
          </ul>
        </section>

        <section>
          <h2>Research Areas</h2>
          <ul>
            <li>Vision-Language Transformers for medical image understanding</li>
            <li>Multi-modal LLM fine-tuning with parameter-efficient methods (LoRA)</li>
            <li>MCP server architecture for LLM-database integration</li>
            <li>Automated radiology report generation from chest X-rays</li>
          </ul>
        </section>

        <section>
          <h2>Technologies Used</h2>
          <div className="tech-tags">
            <span>PyTorch</span>
            <span>LoRA</span>
            <span>Vision Transformer (ViT)</span>
            <span>GPT-2</span>
            <span>MCP Server</span>
            <span>LLM Agents</span>
            <span>Python</span>
            <span>Cross-Attention</span>
            <span>BLEU-4</span>
          </div>
        </section>
      </div>
    </div>
  );
}
