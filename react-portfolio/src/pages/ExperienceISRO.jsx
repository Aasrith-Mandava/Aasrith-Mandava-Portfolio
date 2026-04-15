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
          <p className="detail-role">ML Intern</p>
          <p className="detail-period">Jan 2024 – Apr 2024 | AP, India</p>
        </div>
      </div>

      <div className="detail-content">
        <section>
          <h2>Overview</h2>
          <p>Worked as an ML Intern at the Indian Space Research Organization (ISRO), applying machine learning techniques to payroll analytics, anomaly detection, and intelligent ticket routing. Built time series forecasting models, trained ensemble classifiers for fraud detection, and developed NLP-based ticket classification systems.</p>
        </section>

        <section>
          <h2>Key Projects & Achievements</h2>
          <ul>
            <li>Built a time series model on 3 years of payroll and budget data to forecast monthly departmental spend, improved planning accuracy by 8%.</li>
            <li>Trained Random Forest and XGBoost models to flag anomalous payroll transactions across 2,000 employee records, caught patterns that saved around 30% in disbursement errors.</li>
            <li>Trained a BERT-based classifier on historical payroll tickets to auto-route employee queries across HR, benefits, and finance teams, handled around 300 tickets/week with 87% routing accuracy.</li>
          </ul>
        </section>

        <section>
          <h2>Technical Impact</h2>
          <ul>
            <li>Improved departmental budget planning accuracy through ML-driven forecasting</li>
            <li>Automated anomaly detection in payroll data, reducing manual audit overhead</li>
            <li>Streamlined employee query routing with NLP-based classification</li>
            <li>Applied BERT-based transfer learning for domain-specific ticket classification</li>
          </ul>
        </section>

        <section>
          <h2>Technologies Used</h2>
          <div className="tech-tags">
            <span>Python</span>
            <span>Random Forest</span>
            <span>XGBoost</span>
            <span>BERT</span>
            <span>Time Series</span>
            <span>Scikit-learn</span>
            <span>NLP</span>
            <span>Anomaly Detection</span>
          </div>
        </section>
      </div>
    </div>
  );
}
