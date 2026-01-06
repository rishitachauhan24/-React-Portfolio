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

        <div className="grid md:grid-cols-2 gap-16 items-center max-w-5xl mx-auto">
         
          <div className="flex justify-center">
            <img 
              src="https://i.postimg.cc/GpRybZBP/rishita-pic.png" 
              alt="Rishita Chauhan"
              className="object-cover rounded-2xl"
              style={{ height: '380px', width: '300px' }}
            />
          </div>

        
          <div className="text-gray-700 leading-relaxed space-y-4">
            <p className="text-base text-justify">
        Frontend Developer and BCA student skilled in HTML, CSS, JavaScript,and React.js, with hands-on experience in building responsive and user-friendly web applications. Quick learner with strong problem-solving skills, seeking a frontend internship or entry-level role.            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
