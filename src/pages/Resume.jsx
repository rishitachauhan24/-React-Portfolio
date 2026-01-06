import React from 'react'

function Section({title, children}){
  return (
    <section className="mb-8">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 border-b-2 border-blue-600 pb-2">{title}</h2>
      <div className="text-gray-700">{children}</div>
    </section>
  )
}

export default function Resume(){
  return (
    <section id="resume" className="min-h-screen bg-white py-16">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-3xl font-bold mb-8 text-center">Resume</h1>
      
      <Section title="Experience">
        <div className="mb-6">
          <div className="flex justify-between items-start mb-2">
            <div>
              <div className="font-semibold text-lg">Senior Developer</div>
              <div className="text-gray-600">Tech Company Inc.</div>
            </div>
            <div className="text-sm text-gray-500">2022 - Present</div>
          </div>
          <ul className="list-disc ml-5 space-y-1 text-sm">
            <li>Led development of multiple React-based web applications</li>
            <li>Implemented responsive designs using Tailwind CSS</li>
            <li>Collaborated with cross-functional teams to deliver projects on time</li>
          </ul>
        </div>
        
        <div className="mb-6">
          <div className="flex justify-between items-start mb-2">
            <div>
              <div className="font-semibold text-lg">Junior Developer</div>
              <div className="text-gray-600">Startup XYZ</div>
            </div>
            <div className="text-sm text-gray-500">2020 - 2022</div>
          </div>
          <ul className="list-disc ml-5 space-y-1 text-sm">
            <li>Built and maintained web applications using React and Node.js</li>
            <li>Optimized application performance and user experience</li>
          </ul>
        </div>
      </Section>

      <Section title="Education">
        <div className="mb-4">
          <div className="flex justify-between items-start mb-2">
            <div>
              <div className="font-semibold text-lg">Bachelor of Computer Application</div>
              <div className="text-gray-600">Eternal University</div>
            </div>
            <div className="text-sm text-gray-500">2024 - 2027</div>
          </div>
          
        </div>
      </Section>

      <Section title="Skills">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          <span className="px-3 py-2 bg-blue-100 text-blue-800 rounded-lg text-sm font-medium text-center">JavaScript</span>
          <span className="px-3 py-2 bg-blue-100 text-blue-800 rounded-lg text-sm font-medium text-center">React</span>
          <span className="px-3 py-2 bg-blue-100 text-blue-800 rounded-lg text-sm font-medium text-center">CSS</span>
          <span className="px-3 py-2 bg-blue-100 text-blue-800 rounded-lg text-sm font-medium text-center">HTML5</span>
          <span className="px-3 py-2 bg-blue-100 text-blue-800 rounded-lg text-sm font-medium text-center">Git</span>
          <span className="px-3 py-2 bg-blue-100 text-blue-800 rounded-lg text-sm font-medium text-center">MongoDB</span>
          <span className="px-3 py-2 bg-blue-100 text-blue-800 rounded-lg text-sm font-medium text-center">Node.js</span>

        </div>
      </Section>

      <Section title="Certifications">
        <ul className="space-y-2 text-sm">
          <li className="flex items-start">
            <span className="text-blue-600 mr-2">•</span>
            <div>
              <span className="font-medium">React Professional Certification</span> - 2023
            </div>
          </li>
          <li className="flex items-start">
            <span className="text-blue-600 mr-2">•</span>
            <div>
              <span className="font-medium">Full Stack Developer Certificate</span> - 2022
            </div>
          </li>
        </ul>
      </Section>
      </div>
    </section>
  )
}
