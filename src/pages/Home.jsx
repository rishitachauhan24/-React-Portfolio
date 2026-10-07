import React, { useState, useEffect } from 'react'

export default function Home() {
  const [displayText, setDisplayText] = useState('Frontend Developer')
  const [fadeOut, setFadeOut] = useState(false)

  useEffect(() => {
    const texts = ['Frontend Developer', 'Aspiring Full Stack Developer']
    let currentIndex = 0
    const interval = setInterval(() => {
      setFadeOut(true)
      setTimeout(() => {
        currentIndex = (currentIndex + 1) % texts.length
        setDisplayText(texts[currentIndex])
        setFadeOut(false)
      }, 350)
    }, 4000)

    return () => clearInterval(interval)
  }, [])

  return (
    <>
      <section id="home" className="home-hero">
        <div className="home-hero__inner">
          <div className="hero-copy">
            <h1 className="hero-title"><span>Hi,</span><br /><span>I'm </span><em>Rishita Chauhan</em></h1>
            <p className={`hero-role ${fadeOut ? 'is-fading' : ''}`}>{displayText}</p>
            <div className="hero-actions">
              <a className="button-primary" href="https://drive.google.com/file/d/1hDgCHxrilQfIYE2lR36AJqVlXVI0G9Xv/view?usp=sharing" target="_blank" rel="noreferrer">
                Resume
                <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 16a4 4 0 0 1-.9-7.9A5 5 0 0 1 16 6l.1 0a5 5 0 0 1 1 9.9M9 19l3 3 3-3m-3 3V10" /></svg>
              </a>
            </div>
            <div className="hero-socials" aria-label="Social profiles">
              <a href="https://www.linkedin.com/in/rishitachauhan63/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M19 0H5a5 5 0 0 0-5 5v14a5 5 0 0 0 5 5h14a5 5 0 0 0 5-5V5a5 5 0 0 0-5-5ZM8 19H5V8h3v11ZM6.5 6.7a1.75 1.75 0 1 1 0-3.5 1.75 1.75 0 0 1 0 3.5ZM20 19h-3v-5.6c0-3.37-4-3.11-4 0V19h-3V8h3v1.77c1.4-2.59 7-2.78 7 2.47V19Z" /></svg>
              </a>
              <a href="https://github.com/rishitachauhan24" target="_blank" rel="noreferrer" aria-label="GitHub">
                <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 0a12 12 0 0 0-3.8 23.38c.6.11.8-.26.8-.58v-2.23c-3.34.73-4.04-1.42-4.04-1.42-.55-1.39-1.33-1.76-1.33-1.76-1.09-.75.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.3 3.49 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6.01 0c2.29-1.55 3.3-1.23 3.3-1.23.65 1.66.24 2.88.12 3.18.77.84 1.23 1.91 1.23 3.22 0 4.61-2.81 5.62-5.48 5.92.43.37.82 1.1.82 2.22v3.29c0 .32.19.69.8.58A12 12 0 0 0 12 0Z" /></svg>
              </a>
            </div>
          </div>
          <figure className="hero-portrait">
            <img src="/profile.jpg" alt="Rishita Chauhan" />
          </figure>
        </div>
      </section>
    </>
  )
}




