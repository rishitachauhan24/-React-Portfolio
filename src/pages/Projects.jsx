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
          <a href={link} target="_blank" rel="noreferrer" className="text-gray-700 hover:text-emerald-600">
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
    <section id="projects" className="bg-gradient-to-br from-emerald-50 via-white to-emerald-100 py-12 relative overflow-hidden">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-8 lg:px-16 relative z-10">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-center" style={{ background: 'linear-gradient(45deg, #1c4929, #043312)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
          Projects
        </h1>
        
        {/* Divider */}
        <div className="flex items-center justify-center mb-12">
          <div className="h-1 w-20 bg-gradient-to-r from-transparent via-emerald-800 to-transparent rounded-full"></div>
        </div>
      
      <div className="bg-emerald-50 rounded-lg shadow-lg p-4 sm:p-6 md:p-8 border-b-4 border-emerald-800">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
        <ProjectCard 
          title="Escape the Room" 
          description="A simple interactive game where users try to escape from a locked room by clicking objects and finding clues. Features include smooth animations, button interactions, and a clean UI built using HTML, CSS, and JavaScript."
         
          link="https://hackathon-ashen-ten.vercel.app/"
          image="https://images.unsplash.com/photo-1511512578047-dfb367046420?w=500&h=300&fit=crop"
        />
        
        <ProjectCard 
          title="To-Do-List" 
          description="A clean and responsive task-management app where users can add, delete, and mark tasks as completed. Designed with simple UI and smooth interactions to help users stay organized."
          
          link="https://to-do-list-xi-orpin-28.vercel.app/"
          image="https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=500&h=300&fit=crop"
        />
        
        <ProjectCard 
          title="Recipe Website" 
          description="A user-friendly recipe website where users can explore different dishes with visuals. Built using HTML, CSS, and JavaScript with smooth navigation and responsive layout."
          
          link="https://recipe-five-flax.vercel.app/#booking"
          image="https://images.unsplash.com/photo-1495521821757-a1efb6729352?w=500&h=300&fit=crop"
        />
        
        <ProjectCard 
          title="Learning Intern API" 
          description="A comprehensive API platform designed for learning and internship management. Features include user authentication, course management, and progress tracking with a modern backend architecture."
         
          link="https://learning-intern-api.vercel.app/"
          image="https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=500&h=300&fit=crop"
        />
        </div>
      </div>
      </div>
    </section>
   
  )
}







