import React from 'react'

export default function Home() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 via-white to-purple-50 relative overflow-hidden">
      {/* Background Pattern with Tech Icons */}
      <div className="absolute inset-0 opacity-[0.08]">
        <div className="absolute inset-0 grid grid-cols-6 md:grid-cols-8 gap-16 p-12">
          {/* Repeating pattern */}
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

      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-20 items-center relative z-10">
        {/* Left Content */}
        <div className="text-left">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            <span className="text-gray-900">Hi,</span>
            <br />
            <span className="text-gray-900">I'm </span>
            <span className="text-purple-600">
              Rishita Chauhan
            </span>
          </h2>

          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-16">
            Frontend Developer
          </h3>

          <button 
            onClick={() => window.open('https://drive.google.com/file/d/18xfXFX_qGgwGFr3eiIzqSF2g0Z-Gac2G/preview', '_blank')}
            className="inline-flex items-center bg-purple-600 text-white px-8 py-3 rounded-lg hover:bg-purple-700 transition font-medium shadow-lg hover:shadow-xl"
          >
            Resume 
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
            </svg>
          </button>

          {/* Social Icons */}
          <div className="flex gap-6 mt-16">
            <a 
              href="https://www.linkedin.com/in/rishita-chauhan-5b1324338/" 
              target="_blank" 
              rel="noreferrer"
              className="w-12 h-12 flex items-center justify-center bg-gray-100 hover:bg-purple-100 rounded-lg transition"
            >
              <svg className="w-6 h-6 text-gray-700" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>

            <a 
              href="https://github.com/rishitachauhan24" 
              target="_blank" 
              rel="noreferrer"
              className="w-12 h-12 flex items-center justify-center bg-gray-100 hover:bg-purple-100 rounded-lg transition"
            >
              <svg className="w-6 h-6 text-gray-700" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Right Side - Profile Image with Decorative Elements */}
        <div className="relative flex items-center justify-start">
          {/* Decorative circles and elements */}
          <div className="absolute inset-0 flex items-center justify-start -left-10">
            {/* Outer decorative circle */}
            <div className="absolute w-96 h-96 rounded-full border-2 border-gray-300 opacity-30 left-0"></div>
          </div>

          {/* Main Profile Image */}
          <div className="relative z-10">
            <div className="w-80 h-80 rounded-full overflow-hidden border-8 border-white shadow-2xl bg-gradient-to-br from-purple-100 to-pink-100">
              <img 
                src="https://i.postimg.cc/GpRybZBP/rishita-pic.png" 
                alt="Rishita Chauhan"
                className="w-full h-full object-cover rounded-full"
                style={{ objectPosition: 'center 20%' }}
              />
            </div>
            
            {/* Ring decoration */}
            <div className="absolute -inset-4 rounded-full border-2 border-dashed border-purple-400 opacity-50"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
