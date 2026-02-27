import React from 'react'

export default function About() {
  return (
    <section id="about" className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-white py-20 relative overflow-hidden">
     
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
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <h1 className="text-5xl font-bold text-center mb-16 text-purple-600">
          About
        </h1>

        <div className="max-w-4xl mx-auto">
          <div className="text-gray-700 leading-relaxed space-y-6">
            <p className="text-2xl text-center font-medium">
I am currently pursuing a Bachelor of Computer Applications (BCA) from Eternal University, Baru Sahib, Himachal Pradesh. I have a strong interest in learning and developing skills in the field of web development.

At present, I am building a foundational understanding of front-end development technologies, including HTML, CSS, JavaScript, and React.js. Along with this, I am also learning Python and Data Structures & Algorithms. In parallel with my academic studies, I am continuously strengthening my technical and soft skills under the guidance of Navgurukul.

My objective is to follow a structured learning path, strengthen my technical foundation, and gain practical exposure through internship opportunities in order to grow professionally.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
