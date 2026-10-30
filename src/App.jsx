import React, { useState, useEffect } from 'react'
import Nav from './components/Nav'
import PortfolioLoader from './components/PortfolioLoader'
import Home from './pages/Home'
import About from './pages/About'
import Skills from './pages/Skills'
import Projects from './pages/Projects'
import Experience from './pages/experience'
import Contact from './pages/Contact'

export default function App() {
  const [isLoading, setIsLoading] = useState(true)

  // Scroll-reveal via IntersectionObserver
  useEffect(() => {
    if (isLoading) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
          }
        })
      },
      { threshold: 0.08, rootMargin: '0px 0px -50px 0px' }
    )

    const els = document.querySelectorAll('[data-reveal]')
    els.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [isLoading])

  return (
    <div style={{ minHeight: '100vh', background: 'var(--paper)', color: 'var(--ink)' }}>
      {isLoading && <PortfolioLoader onComplete={() => setIsLoading(false)} />}
      <Nav onHomeClick={() => setIsLoading(true)} />
      <main>
        <Home />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
    </div>
  )
}
