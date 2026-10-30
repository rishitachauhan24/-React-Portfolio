import React, { useState } from 'react'

export default function Contact() {
  const [formData,    setFormData]    = useState({ name: '', email: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({
          access_key:  'faa9c473-ab0c-4687-9769-59c1a8c51b10',
          name:        formData.name,
          email:       formData.email,
          message:     formData.message,
          subject:     'New Portfolio Contact Message!',
          from_name:   'Portfolio Contact Form',
        }),
      })
      const result = await response.json()
      if (result.success) {
        alert('✅ Message successfully sent! I will reply to you soon.')
        setFormData({ name: '', email: '', message: '' })
      } else {
        throw new Error('Failed to send')
      }
    } catch (error) {
      console.error('Submit error:', error)
      alert('❌ Kuch galat ho gaya. Please directly email karo: rishitachauhan24@navgurukul.org')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value })

  return (
    <section id="contact" className="editorial-section contact-section">
      <div className="section-inner">
        <div data-reveal>
          <span className="section-label">Get In Touch</span>
          <div className="section-heading">
            <h2>Contact</h2>
          </div>
        </div>

        <div className="contact-layout">
          {/* ── Info Column ── */}
          <div className="contact-info-col" data-reveal="left">
            <p className="contact-info-heading">
              Have a project in mind or want to connect? I'd love to hear from you.
            </p>

            <div className="contact-info-items">
              {/* Email */}
              <div className="contact-info-item">
                <div className="contact-info-item__icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24">
                    <rect x="2" y="4" width="20" height="16" rx="2"/>
                    <path d="m22 7-10 7L2 7"/>
                  </svg>
                </div>
                <a href="mailto:rishitachauhan24@navgurukul.org">
                  rishitachauhan24@navgurukul.org
                </a>
              </div>

              {/* Phone */}
              <div className="contact-info-item">
                <div className="contact-info-item__icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.99 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.9 1.2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 8.91a16 16 0 0 0 6 6l1.07-1.07a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                </div>
                <a href="tel:+916396712515">+91 6396712515</a>
              </div>

              {/* Location */}
              <div className="contact-info-item">
                <div className="contact-info-item__icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                </div>
                <span>Himachal Pradesh, India</span>
              </div>
            </div>

            {/* Social links */}
            <div className="contact-socials" aria-label="Social profiles">
              <a
                href="https://www.linkedin.com/in/rishitachauhan63/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="contact-social-link"
              >
                <svg viewBox="0 0 24 24">
                  <path d="M19 0H5a5 5 0 0 0-5 5v14a5 5 0 0 0 5 5h14a5 5 0 0 0 5-5V5a5 5 0 0 0-5-5ZM8 19H5V8h3v11ZM6.5 6.7a1.75 1.75 0 1 1 0-3.5 1.75 1.75 0 0 1 0 3.5ZM20 19h-3v-5.6c0-3.37-4-3.11-4 0V19h-3V8h3v1.77c1.4-2.59 7-2.78 7 2.47V19Z"/>
                </svg>
              </a>
              <a
                href="https://github.com/rishitachauhan24"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="contact-social-link"
              >
                <svg viewBox="0 0 24 24">
                  <path d="M12 0a12 12 0 0 0-3.8 23.38c.6.11.8-.26.8-.58v-2.23c-3.34.73-4.04-1.42-4.04-1.42-.55-1.39-1.33-1.76-1.33-1.76-1.09-.75.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.3 3.49 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6.01 0c2.29-1.55 3.3-1.23 3.3-1.23.65 1.66.24 2.88.12 3.18.77.84 1.23 1.91 1.23 3.22 0 4.61-2.81 5.62-5.48 5.92.43.37.82 1.1.82 2.22v3.29c0 .32.19.69.8.58A12 12 0 0 0 12 0Z"/>
                </svg>
              </a>
              <a
                href="mailto:rishitachauhan24@navgurukul.org"
                aria-label="Email"
                className="contact-social-link"
              >
                <svg viewBox="0 0 24 24" style={{ fill: 'none', stroke: 'currentColor', strokeWidth: 1.8 }}>
                  <rect x="2" y="4" width="20" height="16" rx="2"/>
                  <path d="m22 7-10 7L2 7"/>
                </svg>
              </a>
              <a
                href="tel:+916396712515"
                aria-label="Phone"
                className="contact-social-link"
              >
                <svg viewBox="0 0 24 24" style={{ fill: 'none', stroke: 'currentColor', strokeWidth: 1.8 }}>
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.99 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.9 1.2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 8.91a16 16 0 0 0 6 6l1.07-1.07a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* ── Form Column ── */}
          <div className="contact-form-col" data-reveal="right">
            <form onSubmit={handleSubmit} className="contact-form">
              {/* Name + Email row */}
              <div className="contact-form-row">
                <div className="form-group">
                  <label htmlFor="cf-name" className="form-label">Name</label>
                  <input
                    id="cf-name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="contact-input"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="cf-email" className="form-label">Email</label>
                  <input
                    id="cf-email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="contact-input"
                    placeholder="your@email.com"
                    required
                  />
                </div>
              </div>

              {/* Message */}
              <div className="form-group">
                <label htmlFor="cf-message" className="form-label">Message</label>
                <textarea
                  id="cf-message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="contact-input contact-textarea"
                  placeholder="Tell me about your project or just say hello…"
                  rows="5"
                  required
                />
              </div>

              {/* Human check */}
              <div className="contact-captcha">
                <input type="checkbox" required style={{ accentColor: 'var(--green)' }} />
                <span>I am human</span>
              </div>

              {/* Submit */}
              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="button-primary"
                  style={{ opacity: isSubmitting ? .65 : 1, cursor: isSubmitting ? 'not-allowed' : 'pointer' }}
                >
                  {isSubmitting ? 'Sending…' : 'Send Message'}
                  {!isSubmitting && (
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                      <line x1="22" y1="2" x2="11" y2="13"/>
                      <polygon points="22 2 15 22 11 13 2 9 22 2"/>
                    </svg>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* ── Footer ── */}
      <footer className="portfolio-footer">
        <div className="portfolio-footer__inner">
          {/* Logo */}
          <span className="portfolio-footer__logo">Rishita Chauhan</span>

          {/* Social icon links */}
          <div className="portfolio-footer__links">
            <a
              href="https://www.linkedin.com/in/rishitachauhan63/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="portfolio-footer__link"
            >
              <svg viewBox="0 0 24 24">
                <path d="M19 0H5a5 5 0 0 0-5 5v14a5 5 0 0 0 5 5h14a5 5 0 0 0 5-5V5a5 5 0 0 0-5-5ZM8 19H5V8h3v11ZM6.5 6.7a1.75 1.75 0 1 1 0-3.5 1.75 1.75 0 0 1 0 3.5ZM20 19h-3v-5.6c0-3.37-4-3.11-4 0V19h-3V8h3v1.77c1.4-2.59 7-2.78 7 2.47V19Z"/>
              </svg>
            </a>
            <a
              href="https://github.com/rishitachauhan24"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="portfolio-footer__link"
            >
              <svg viewBox="0 0 24 24">
                <path d="M12 0a12 12 0 0 0-3.8 23.38c.6.11.8-.26.8-.58v-2.23c-3.34.73-4.04-1.42-4.04-1.42-.55-1.39-1.33-1.76-1.33-1.76-1.09-.75.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.3 3.49 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6.01 0c2.29-1.55 3.3-1.23 3.3-1.23.65 1.66.24 2.88.12 3.18.77.84 1.23 1.91 1.23 3.22 0 4.61-2.81 5.62-5.48 5.92.43.37.82 1.1.82 2.22v3.29c0 .32.19.69.8.58A12 12 0 0 0 12 0Z"/>
              </svg>
            </a>
            <a
              href="mailto:rishitachauhan24@navgurukul.org"
              aria-label="Email"
              className="portfolio-footer__link"
            >
              <svg viewBox="0 0 24 24" style={{ fill: 'none', stroke: 'currentColor', strokeWidth: 1.8 }}>
                <rect x="2" y="4" width="20" height="16" rx="2"/>
                <path d="m22 7-10 7L2 7"/>
              </svg>
            </a>
          </div>

          {/* Copyright */}
          <span className="portfolio-footer__copy">
            © {new Date().getFullYear()} Rishita Chauhan
          </span>
        </div>
      </footer>
    </section>
  )
}
