import React, { useState } from 'react'

export default function Contact(){
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Form submitted! (This is a demo - connect to a backend to actually send)')
    console.log('Form data:', formData)
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <section id="contact" className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-purple-50 py-16 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.08]">
        <div className="absolute inset-0 grid grid-cols-6 md:grid-cols-8 gap-16 p-12">
          {[...Array(64)].map((_, i) => (
            <div key={i} className="flex items-center justify-center text-gray-400 transform rotate-12">
              {i % 8 === 0 && <span className="text-5xl font-bold">&lt;/&gt;</span>}
              {i % 8 === 1 && <span className="text-5xl">⚙️</span>}
              {i % 8 === 2 && <span className="text-4xl font-bold">HTML5</span>}
              {i % 8 === 3 && <span className="text-5xl">💻</span>}
              {i % 8 === 4 && <span className="text-4xl font-bold">CSS3</span>}
              {i % 8 === 5 && <span className="text-5xl font-bold">{'{ }'}</span>}
              {i % 8 === 6 && <span className="text-4xl font-bold">PYTHON</span>}
              {i % 8 === 7 && <span className="text-5xl">⚡</span>}
            </div>
          ))}
        </div>
      </div>
      
      <div className="max-w-2xl mx-auto px-6 mb-20 relative z-10">
        <h1 className="text-5xl font-bold mb-2 text-center text-purple-600">
          Contact
        </h1>
        <h2 className="text-2xl font-semibold mb-8 text-center text-gray-600">
          CONTACT US
        </h2>
        
        <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8">
          <div>
            <label className="block text-sm font-medium mb-2 text-gray-700">Name:</label>
            <input 
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border-b-2 border-gray-300 px-2 py-2 focus:outline-none focus:border-purple-500" 
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
              className="w-full border-b-2 border-gray-300 px-2 py-2 focus:outline-none focus:border-purple-500" 
              required
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-2 text-gray-700">Message:</label>
            <textarea 
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full border-2 border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-purple-500" 
              rows="5"
              required
            />
          </div>

          <div className="flex items-center space-x-3 p-3 border-2 border-gray-300 rounded w-fit">
            <input type="checkbox" className="w-6 h-6" required />
            <span className="text-sm text-gray-700">I am human</span>
            <div className="ml-4">
              {/* <div className="text-xs text-blue-500 font-semibold">hCaptcha</div> */}
              <div className="text-xs text-gray-400">Privacy - Terms</div>
            </div>
          </div>
          
          <div className="text-center">
            <button 
              type="submit" 
              className="bg-purple-600 text-white px-8 py-3 rounded-lg hover:bg-purple-700 transition font-medium"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>

      
      <div className="bg-gray-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-8">Connect With Me</h2>
          
          <div className="flex justify-center items-center space-x-8 mb-6">
          
            <a 
              href="mailto:rishita10chauhan@gmail.com" 
              className="hover:scale-110 transition-transform"
              target="_blank"
              rel="noreferrer"
            >
              <svg className="w-10 h-10 text-white hover:text-purple-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
            </a>

         
            <a 
              href="tel:+916396712515" 
              className="hover:scale-110 transition-transform"
            >
              <svg className="w-10 h-10 text-white hover:text-purple-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
              </svg>
            </a>

           
            <a 
              href="https://github.com/rishitachauhan24" 
              className="hover:scale-110 transition-transform"
              target="_blank"
              rel="noreferrer"
            >
              <svg className="w-10 h-10 text-white hover:text-purple-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>

            
            <a 
              href="https://www.linkedin.com/in/rishita-chauhan-5b1324338/" 
              className="hover:scale-110 transition-transform"
              target="_blank"
              rel="noreferrer"
            >
              <svg className="w-10 h-10 text-white hover:text-purple-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
          </div>

          <div className="space-y-1">
            <p className="text-white text-lg">rishita10chauhan@gamil.com</p>
            <p className="text-white text-lg">+916396712515</p>
          </div>
        </div>
      </div>
    </section>
  )
}
