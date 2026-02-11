const education = [
  {
    school: 'Georgia State University',
    degree: 'Master of Science in Computer Science',
    gpa: '3.6/4.0',
    location: 'Atlanta, GA',
    date: 'Aug 2024 – May 2026',
    coursework: [
      'Advanced Image Processing',
      'Advanced Video Processing',
      'Advanced Database Systems',
      'Human Computer Interaction',
      'Web Programming',
      'Text Processing & LLMs',
      'Software Development',
      'Software Engineering'
    ]
  },
  {
    school: 'Anna University',
    degree: 'Bachelor of Technology in Computer Science and Engineering',
    gpa: '3.8/4.0',
    location: 'Tamil Nadu, India',
    date: 'Aug 2020 – Mar 2024',
    coursework: [
      'Data Structures',
      'Design & Analysis of Algorithms',
      'Cloud Computing',
      'Intro to Data Science',
      'Intro to Python',
      'Object Oriented Programming'
    ]
  }
];

export default function Education() {
  return (
    <section id="education" className="fade-in">
      <div className="section-header">
        <h2 className="section-title">Education</h2>
      </div>
      <div className="education-list stagger-children">
        {education.map((edu) => (
          <div key={edu.school} className="education-card">
            <div className="education-header">
              <h3>{edu.school}</h3>
              <p className="degree">{edu.degree}</p>
              <div className="education-meta-top">
                <span className="gpa">GPA: {edu.gpa}</span>
                <span className="date">{edu.date}</span>
              </div>
            </div>

            <div className="coursework-section">
              <h4>Coursework</h4>
              <div className="course-tags">
                {edu.coursework.map(course => (
                  <span key={course} className="course-tag">{course}</span>
                ))}
              </div>
            </div>

            <div className="education-footer">
              <span className="location">{edu.location}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
