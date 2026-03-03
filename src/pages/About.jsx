import React from 'react'

export default function About() {
  return (
    <section id="about" className="bg-gradient-to-br from-emerald-50 via-white to-emerald-100 py-12 relative overflow-hidden">
     
      <div className="max-w-screen-xl mx-auto px-4 sm:px-8 lg:px-16 relative z-10">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-6" style={{ background: 'linear-gradient(45deg, #1c4929, #043312)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
          About
        </h1>
        
        {/* Divider */}
        <div className="flex items-center justify-center mb-12">
          <div className="h-1 w-20 bg-gradient-to-r from-transparent via-emerald-800 to-transparent rounded-full"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-emerald-50 rounded-lg shadow-lg p-4 sm:p-6 md:p-8 border-b-4 border-emerald-800">
            <div className="text-gray-700 leading-relaxed space-y-4 sm:space-y-6">
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-center font-medium">
I am currently pursuing a Bachelor of Computer Applications (BCA) from Eternal University, Baru Sahib, Himachal Pradesh. I have a strong interest in learning and developing skills in the field of web development.

At present, I am building a foundational understanding of front-end development technologies, including HTML, CSS, JavaScript, and React.js. Along with this, I am also learning Python and Data Structures & Algorithms. In parallel with my academic studies, I am continuously strengthening my technical and soft skills under the guidance of Navgurukul.

My objective is to follow a structured learning path, strengthen my technical foundation, and gain practical exposure through internship opportunities in order to grow professionally.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}







