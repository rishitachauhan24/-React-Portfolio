import React, { useState } from 'react'
import Nav from './components/Nav'
import PortfolioLoader from './components/PortfolioLoader'
import Home from './pages/Home'
import About from './pages/About'
import Skills from './pages/Skills'
import Projects from './pages/Projects'
import Contact from './pages/Contact'

export default function App() {
  const [isLoading, setIsLoading] = useState(true)

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {isLoading && <PortfolioLoader onComplete={() => setIsLoading(false)} />}
      <Nav onHomeClick={() => setIsLoading(true)} />
      <main>
        <Home />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </div>
  )
}
