import React, { useState } from 'react'

export default function Contact(){
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Web3Forms - Free & Instant!
      // Get your own key: https://web3forms.com (just enter your email - takes 30 seconds!)
      // TODO: Replace 'YOUR_ACCESS_KEY_HERE' with your actual key from web3forms.com
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: 'faa9c473-ab0c-4687-9769-59c1a8c51b10', // Your Web3Forms access key
          name: formData.name,
          email: formData.email,
          message: formData.message,
          subject: 'New Portfolio Contact Message!',
          from_name: 'Portfolio Contact Form'
        })
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

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <section id="contact" className="bg-gradient-to-br from-emerald-50 via-white to-emerald-100 py-12 pb-0 relative overflow-hidden">
      
      <div className="max-w-4xl mx-auto px-4 sm:px-8 lg:px-16 mb-0 relative z-10">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-center" style={{ background: 'linear-gradient(45deg, #1c4929, #043312)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
          Contact
        </h1>
        
        {/* Divider */}
        <div className="flex items-center justify-center mb-8">
          <div className="h-1 w-20 bg-gradient-to-r from-transparent via-emerald-800 to-transparent rounded-full"></div>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6 bg-emerald-100 p-4 sm:p-6 md:p-8 shadow-lg rounded-lg border-b-4 border-emerald-800 relative z-20">
          <div>
            <label className="block text-sm font-medium mb-2 text-gray-700">Name:</label>
            <input 
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border-b-2 border-gray-300 px-2 py-2 focus:outline-none focus:border-emerald-800" 
              required
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-2 text-gray-700">Email:</label>
            <input 
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border-b-2 border-gray-300 px-2 py-2 focus:outline-none focus:border-emerald-800" 
              required
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-2 text-gray-700">Message:</label>
            <textarea 
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full border-2 border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-emerald-800" 
              rows="5"
              required
            />
          </div>

          <div className="flex items-center space-x-2 sm:space-x-3 p-2 sm:p-3 border-2 border-gray-300 rounded w-fit">
            <input 
              type="checkbox" 
              className="w-5 h-5 sm:w-6 sm:h-6 cursor-pointer" 
              style={{ accentColor: '#1c4929' }}
              required 
            />
            <span className="text-xs sm:text-sm text-gray-700">I am human</span>
            <div className="ml-4">
              {/* <div className="text-xs text-emerald-500 font-semibold">hCaptcha</div> */}
             
            </div>
          </div>
          
          <div className="text-center">
            <button 
              type="submit" 
              disabled={isSubmitting}
              className="text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg transition font-medium disabled:bg-gray-400 disabled:cursor-not-allowed text-sm sm:text-base"
              style={{ background: isSubmitting ? '#9ca3af' : 'linear-gradient(45deg, #1c4929, #043312)' }}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </div>
        </form>
      </div>

      
      <div className="text-white py-12 sm:py-16 relative z-10 mt-8 sm:mt-12" style={{ background: 'linear-gradient(45deg, #1c4929, #043312)' }}>
        <div className="max-w-screen-xl mx-auto px-4 sm:px-8 lg:px-16 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8">Connect With Me</h2>
          
          <div className="flex justify-center items-center space-x-4 sm:space-x-6 md:space-x-8 mb-4 sm:mb-6">
          
            <a 
              href="mailto:rishitachauhan24@navgurukul.org" 
              className="hover:scale-110 transition-transform"
              target="_blank"
              rel="noreferrer"
            >
              <svg className="w-8 h-8 sm:w-10 sm:h-10 text-white hover:text-emerald-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
            </a>

         
            <a 
              href="tel:+916396712515" 
              className="hover:scale-110 transition-transform"
            >
              <svg className="w-8 h-8 sm:w-10 sm:h-10 text-white hover:text-emerald-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
              </svg>
            </a>

           
            <a 
              href="https://github.com/rishitachauhan24" 
              className="hover:scale-110 transition-transform"
              target="_blank"
              rel="noreferrer"
            >
              <svg className="w-8 h-8 sm:w-10 sm:h-10 text-white hover:text-emerald-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>

            
            <a 
              href="https://www.linkedin.com/in/rishitachauhan63/" 
              className="hover:scale-110 transition-transform"
              target="_blank"
              rel="noreferrer"
            >
              <svg className="w-8 h-8 sm:w-10 sm:h-10 text-white hover:text-emerald-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
          </div>

          <div className="space-y-1">
            <a 
              href="mailto:rishitachauhan24@navgurukul.org" 
              className="text-white text-sm sm:text-base md:text-lg hover:text-emerald-400 transition-colors block"
            >
              rishitachauhan24@navgurukul.org
            </a>
            <a 
              href="tel:+916396712515" 
              className="text-white text-sm sm:text-base md:text-lg hover:text-emerald-400 transition-colors block"
            >
              +916396712515
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}







