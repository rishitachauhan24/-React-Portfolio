import React from 'react'

export default function About() {
  return (
    <section id="about" className="editorial-section about-section">
      <div className="section-inner">
        <div data-reveal>
          <span className="section-label">About Me</span>
          <div className="section-heading">
            <h2>A Bit About <em>Myself</em></h2>
          </div>
        </div>

        <div className="about-grid">
          {/* Left Column */}
          <div className="about-left">
            <p className="about-lead" data-reveal>
              I am currently pursuing a Bachelor of Computer Applications (BCA) from Eternal University, Baru Sahib, Himachal Pradesh. I have a strong interest in learning and developing skills in the field of web development.
            </p>

            <div className="about-body" data-reveal data-reveal-delay="1">
              <p>
                At present, I am building a foundational understanding of front-end development technologies, including HTML, CSS, JavaScript, and React.js. Along with this, I am also learning Python and Data Structures &amp; Algorithms. I have recently started learning Artificial Intelligence and Machine Learning as well.
              </p>
              <p>
                In parallel with my academic studies, I am continuously strengthening my technical and soft skills under the guidance of Navgurukul. My objective is to follow a structured learning path, strengthen my technical foundation, and gain practical exposure through internship opportunities in order to grow professionally.
              </p>
            </div>

            <div className="about-badges" data-reveal data-reveal-delay="2">
              <span className="about-badge">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 3C7 3 3 7 3 12s4 9 9 9 9-4 9-9-4-9-9-9zm0 16.5A7.5 7.5 0 1 1 12 4.5 7.5 7.5 0 0 1 12 19.5zM12 7v5l4 2"/>
                </svg>
                BCA — Eternal University
              </span>
              <span className="about-badge">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                </svg>
                Navgurukul Learner
              </span>
              <span className="about-badge">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 3a4 4 0 1 0 0 8 4 4 0 0 0 0-8zM23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>
                </svg>
                Himachal Pradesh, India
              </span>
            </div>
          </div>

          {/* Right Column */}
          <div className="about-right" data-reveal="right">
            <div className="about-quote">
              <blockquote>
                "My objective is to follow a structured learning path, strengthen my technical foundation, and gain practical exposure through internship opportunities in order to grow professionally."
              </blockquote>
              <cite>— Rishita Chauhan</cite>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
