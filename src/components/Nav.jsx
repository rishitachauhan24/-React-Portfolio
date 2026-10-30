import React, { useState, useEffect } from 'react'

const Nav = ({ onHomeClick }) => {
  const [activeSection, setActiveSection] = useState('home')
  const [isScrolled, setIsScrolled]       = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navItems = [
    { id: 'home',       label: 'Home' },
    { id: 'about',      label: 'About' },
    { id: 'skills',     label: 'Skills' },
    { id: 'projects',   label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'contact',    label: 'Contact' },
  ]

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
      setActiveSection(id)
      setIsMobileMenuOpen(false)
    }
  }

  const handleResumeDownload = () => {
    window.open('https://drive.google.com/file/d/1savOG7db5KnE-srTiDXF7Zoj5k0lHdvd/view?usp=sharing', '_blank')
  }

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)

      const sections = navItems.map((item) => item.id)
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i])
        if (section) {
          const rect = section.getBoundingClientRect()
          if (rect.top <= 110) {
            setActiveSection(sections[i])
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`nav-shell sticky top-0 z-50 transition-all duration-300${isScrolled ? ' is-scrolled' : ''}`}
    >
      <div style={{ maxWidth: 1440, margin: '0 auto', padding: '0 clamp(16px, 4vw, 56px)' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 76 }}>

          {/* Logo */}
          <button
            onClick={() => { onHomeClick(); scrollToSection('home') }}
            className="nav-logo"
            style={{ cursor: 'pointer', background: 'none', border: 'none', padding: 0 }}
          >
            {'< Rishita Chauhan />'}
          </button>

          {/* Desktop Navigation */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 36 }} className="hidden md:flex">
            <nav style={{ display: 'flex', alignItems: 'center', gap: 32 }}>
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`nav-link relative group${activeSection === item.id ? ' is-active' : ''}`}
                  style={{ background: 'none', border: 'none', padding: '4px 0', cursor: 'pointer' }}
                >
                  <span style={{}}>
                    {item.label}
                  </span>
                  <span
                    className="absolute"
                    style={{
                      bottom: -4,
                      left: 0,
                      right: 0,
                      height: 2,
                      background: 'var(--green)',
                      transform: activeSection === item.id ? 'scaleX(1)' : 'scaleX(0)',
                      transformOrigin: activeSection === item.id ? 'left' : 'center',
                      transition: 'transform .22s cubic-bezier(.4,0,.2,1)',
                    }}
                  />
                </button>
              ))}
            </nav>

            <button
              onClick={handleResumeDownload}
              className="button-primary nav-resume"
              style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '0 20px', minHeight: 42 }}
            >
              Resume
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/>
              </svg>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="nav-menu-button md:hidden"
            aria-label="Toggle menu"
            style={{
              display: 'none',
              padding: 8,
              background: 'none',
              border: '1px solid var(--line)',
              borderRadius: 4,
              cursor: 'pointer',
              color: 'var(--ink-2)',
            }}
          >
            <svg width="22" height="22" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" viewBox="0 0 24 24" stroke="currentColor">
              {isMobileMenuOpen
                ? <path d="M6 18L18 6M6 6l12 12" />
                : <path d="M4 6h16M4 12h16M4 18h16" />
              }
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className="md:hidden"
          style={{
            overflow: 'hidden',
            maxHeight: isMobileMenuOpen ? 400 : 0,
            transition: 'max-height .3s cubic-bezier(.4,0,.2,1)',
          }}
        >
          <nav style={{ display: 'flex', flexDirection: 'column', gap: 4, paddingBottom: 16 }}>
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="mobile-nav-link"
                style={{
                  padding: '12px 16px',
                  textAlign: 'left',
                  background: activeSection === item.id ? 'var(--green-soft)' : 'transparent',
                  borderLeft: activeSection === item.id ? '3px solid var(--green)' : '3px solid transparent',
                  borderRadius: 4,
                  cursor: 'pointer',
                  fontWeight: activeSection === item.id ? 600 : 500,
                  fontSize: 14,
                  color: activeSection === item.id ? 'var(--green)' : 'var(--ink-2)',
                  transition: 'background .2s, color .2s',
                }}
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={handleResumeDownload}
              className="button-primary"
              style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, margin: '6px 0 0', padding: '12px 16px', borderRadius: 4 }}
            >
              Resume
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/>
              </svg>
            </button>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Nav
