import React from 'react'

export default function Resume(){
  return (
    <section id="resume" className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-6xl mx-auto px-6">
        <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">Resume</h1>
        
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="flex justify-center mb-6">
            <a 
              href="/Resume_Feb10.pdf" 
              download="Rishita_Chauhan_Resume.pdf"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300 inline-flex items-center"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download Resume
            </a>
          </div>
          
          <div className="w-full" style={{ height: '80vh' }}>
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
