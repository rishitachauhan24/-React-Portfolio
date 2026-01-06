import React from 'react'

const ProjectCard = ({title, description, tags, link, image}) => (
  <div className="border border-gray-200 rounded-lg bg-white shadow-sm hover:shadow-md transition overflow-hidden">
    {/* Project Image */}
    {image && (
      <div className="w-full h-48 bg-gray-100 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>
    )}
    
    <div className="p-6">
      <div className="flex items-start justify-between mb-2">
        <h3 className="font-semibold text-xl text-gray-900">{title}</h3>
        <div className="flex gap-2">
          <a href={link} target="_blank" rel="noreferrer" className="text-gray-700 hover:text-purple-600">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </div>
      
      {tags && (
        <div className="flex flex-wrap gap-2 mb-3">
          {tags.map((tag, i) => (
            <span key={i} className="text-xs text-gray-600">
              {tag}
              {i < tags.length - 1 && ' | '}
            </span>
          ))}
        </div>
      )}
      
      <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
    </div>
  </div>
)

export default function Projects(){
  return (
    <section id="projects" className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-white py-16 relative overflow-hidden">
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
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <h1 className="text-5xl font-bold mb-12 text-center text-purple-600">
          Projects
        </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <ProjectCard 
          title="Escape the Room" 
          description="A simple interactive game where users try to escape from a locked room by clicking objects and finding clues. Features include smooth animations, button interactions, and a clean UI built using HTML, CSS, and JavaScript."
          tags={['HTML', 'CSS', 'JavaScript', 'Game Design']}
          link="https://hackathon-ashen-ten.vercel.app/"
          image="https://images.unsplash.com/photo-1511512578047-dfb367046420?w=500&h=300&fit=crop"
        />
        
        <ProjectCard 
          title="To-Do-List" 
          description="A clean and responsive task-management app where users can add, delete, and mark tasks as completed. Designed with simple UI and smooth interactions to help users stay organized."
          tags={['HTML', 'CSS', 'JavaScript', 'UI/UX']}
          link="https://to-do-list-xi-orpin-28.vercel.app/"
          image="https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=500&h=300&fit=crop"
        />
        
        <ProjectCard 
          title="Recipe Website" 
          description="A user-friendly recipe website where users can explore different dishes with visuals. Built using HTML, CSS, and JavaScript with smooth navigation and responsive layout."
          tags={['HTML', 'CSS', 'JavaScript', 'Responsive Design']}
          link="https://recipe-five-flax.vercel.app/#booking"
          image="https://images.unsplash.com/photo-1495521821757-a1efb6729352?w=500&h=300&fit=crop"
        />
        
        <ProjectCard 
          title="Change Text & Add Task" 
          description="A mini project that demonstrates DOM manipulation. Users can interactively change text content and add tasks dynamically. Simple UI and perfect example of how JavaScript handles real-time updates."
          tags={['HTML', 'CSS', 'JavaScript', 'DOM Manipulation']}
          link="https://my-list-pi.vercel.app/"
          image="https://images.unsplash.com/photo-1517842645767-c639042777db?w=500&h=300&fit=crop"
        />
      </div>
      </div>
    </section>
  )
}
