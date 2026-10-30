import React from 'react'

const experiences = [
  {
    role:        'Web Developer Intern',
    org:         'JobLuxe',
    orgUrl:      'https://www.jobluxe.in/',
    certificateUrl: 'https://drive.google.com/file/d/1RwOHY9Bh2-HU__Qk96XonxCg9R1wqsnA/view',
    period:      'Mar 2026 - May 2026',
    type:        'Internship',
    description: 'Developed responsive, user-friendly web interfaces using HTML, CSS, and JavaScript. Implemented frontend features that improved website functionality and user experience, ensured cross-device compatibility across mobile, tablet, and desktop screen sizes, and used Git and GitHub for version control and collaborative development.',
    skills:      ['HTML', 'CSS', 'JavaScript', 'Responsive Design', 'Git', 'GitHub','Tailwind','Typescript','google analytics'],
  },
  {
    role:        'Frontend Developer Intern',
    org:         'Vedonyx',
    // orgUrl:      'https://drive.google.com/file/d/1s-ZRkrE01B_7LiuPbLrNoCFKeY0airNa/view',
    certificateUrl: 'https://drive.google.com/file/d/1s-ZRkrE01B_7LiuPbLrNoCFKeY0airNa/view',
    period:      'Apr 2026 - Jun 2026',
    type:        'Internship',
    description: 'Built and updated web pages using HTML, CSS, and JavaScript. Created responsive layouts for mobile, tablet, and desktop, improved site design and usability, and managed and tracked code changes using Git and GitHub.',
    skills:      ['HTML', 'CSS', 'JavaScript', 'Responsive Design', 'Git', 'GitHub'],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="editorial-section experience-section">
      <div className="section-inner">
        <div data-reveal>
          <span className="section-label">Experience</span>
          <div className="section-heading">
            <h2>Where I've <em>Grown</em></h2>
          </div>
        </div>

        <div className="exp-timeline">
          {experiences.map((exp, i) => (
            <div className="exp-item" key={i} data-reveal data-reveal-delay={String(i + 1)}>
              {/* Timeline dot */}
              <div className="exp-dot" aria-hidden="true" />

              <div className="exp-card">
                <div className="exp-header">
                  <div className="exp-title-group">
                    <div className="exp-role">{exp.role}</div>
                    <a
                      href={exp.orgUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="exp-org"
                    >
                      <svg viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                        <polyline points="9 22 9 12 15 12 15 22"/>
                      </svg>
                      {exp.org}
                    </a>
                  </div>

                  <div className="exp-meta">
                    <span className="exp-period">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                        <rect x="3" y="4" width="18" height="18" rx="2"/>
                        <line x1="16" y1="2" x2="16" y2="6"/>
                        <line x1="8"  y1="2" x2="8"  y2="6"/>
                        <line x1="3"  y1="10" x2="21" y2="10"/>
                      </svg>
                      {exp.period}
                    </span>
                    <span className="exp-type">{exp.type}</span>
                  </div>
                </div>

                <p className="exp-desc">{exp.description}</p>

                <div className="exp-skills">
                  {exp.skills.map((skill) => (
                    <span className="exp-skill-tag" key={skill}>{skill}</span>
                  ))}
                </div>

                {exp.certificateUrl && (
                  <a
                    className="exp-certificate-link"
                    href={exp.certificateUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    View Certificate
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M7 17L17 7M8 7h9v9" />
                    </svg>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Placeholder note for future entries */}
        <p
          style={{
            marginTop: 40,
            color: 'var(--muted-2)',
            fontFamily: "'Inter', Arial, sans-serif",
            fontSize: 13,
            fontStyle: 'italic',
          }}
          data-reveal
          data-reveal-delay="2"
        >
          More experiences will be added here as my career progresses.
        </p>
      </div>
    </section>
  )
}