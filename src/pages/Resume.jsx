import React from 'react'

export default function Resume(){
  return (
    <section id="resume" className="bg-gradient-to-br from-emerald-50 via-white to-emerald-100 py-12">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-8 lg:px-16">
        <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-center" style={{ background: 'linear-gradient(45deg, #1c4929, #043312)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Resume</h1>
        
        {/* Divider */}
        <div className="flex items-center justify-center mb-8">
          <div className="h-1 w-20 bg-gradient-to-r from-transparent via-emerald-800 to-transparent rounded-full"></div>
        </div>
        
        <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6">
          <div className="flex justify-center mb-4 sm:mb-6">
            <a 
              href="/Resume_Feb10.pdf" 
              download="Rishita_Chauhan_Resume.pdf"
              className="text-white font-semibold py-2.5 sm:py-3 px-5 sm:px-6 rounded-lg transition duration-300 inline-flex items-center text-sm sm:text-base"
              style={{ background: 'linear-gradient(45deg, #1c4929, #043312)' }}
            >
              <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download Resume
            </a>
          </div>
          
          <div className="w-full" style={{ height: '60vh', minHeight: '400px' }}>
            <iframe
              src="/Resume_Feb10.pdf"
              className="w-full h-full border-2 border-gray-200 rounded-lg"
              title="Resume"
            />
          </div>
        </div>
      </div>
    </section>
  )
}





