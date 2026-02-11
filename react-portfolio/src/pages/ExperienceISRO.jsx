import { useNavigate } from 'react-router-dom';

export default function ExperienceISRO() {
  const navigate = useNavigate();

  return (
    <div className="experience-detail">
      <button onClick={() => navigate('/')} className="back-button">← Back to Portfolio</button>
      
      <div className="detail-header">
        <div className="detail-logo logo-isro">ISRO</div>
        <div>
          <h1>Indian Space Research Organization</h1>
          <p className="detail-role">Software Engineer</p>
          <p className="detail-period">May 2022 – Aug 2024 | India</p>
        </div>
      </div>

      <div className="detail-content">
        <section>
          <h2>Overview</h2>
          <p>Worked as a Software Engineer at the Indian Space Research Organization (ISRO), India's premier space agency. Developed mission-critical enterprise systems for satellite operations, ground control, and space mission management. Contributed to projects supporting India's space exploration initiatives.</p>
        </section>

        <section>
          <h2>Key Projects & Achievements</h2>
          <ul>
            <li>Developed real-time satellite telemetry processing system handling 10,000+ data points per second</li>
            <li>Built mission-critical backend services using Spring Boot for satellite ground control operations</li>
            <li>Implemented secure authentication and authorization systems using Azure AD for mission control access</li>
            <li>Designed and deployed microservices architecture for distributed satellite data processing</li>
            <li>Created RESTful APIs for satellite command and control systems</li>
            <li>Developed data visualization dashboards for real-time mission monitoring</li>
            <li>Implemented message queuing systems using Apache Kafka for reliable data streaming</li>
            <li>Optimized database queries reducing response time by 60% for critical operations</li>
            <li>Deployed applications on AWS EC2 with RDS and ElastiCache for high availability</li>
            <li>Collaborated with scientists and engineers across multiple space missions</li>
          </ul>
        </section>

        <section>
          <h2>Technical Impact</h2>
          <ul>
            <li>Ensured 99.9% uptime for mission-critical satellite control systems</li>
            <li>Reduced system latency by implementing efficient caching strategies</li>
            <li>Enhanced system security through comprehensive authentication mechanisms</li>
            <li>Improved code maintainability through clean architecture and documentation</li>
          </ul>
        </section>

        <section>
          <h2>Technologies Used</h2>
          <div className="tech-tags">
            <span>Java</span>
            <span>Spring Boot</span>
            <span>PostgreSQL</span>
            <span>MySQL</span>
            <span>AWS EC2</span>
            <span>RDS</span>
            <span>ElastiCache</span>
            <span>Docker</span>
            <span>Kafka</span>
            <span>Elasticsearch</span>
            <span>Azure AD</span>
            <span>Git</span>
            <span>Microservices</span>
          </div>
        </section>
      </div>
    </div>
  );
}
