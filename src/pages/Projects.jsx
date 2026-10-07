import React from 'react'

const ProjectCard = ({title, description, link, image}) => (
  <article className="project-item">
    <a className="project-image" href={link} target="_blank" rel="noreferrer" aria-label={`View ${title}`}>
      <img src={image} alt={title} />
      <span className="project-open" aria-hidden="true">↗</span>
    </a>
    <div className="project-copy">
      <h3><a href={link} target="_blank" rel="noreferrer">{title}</a></h3>
      <p>{description}</p>
    </div>
  </article>
)
export default function Projects(){
  return (
    <section id="projects" className="editorial-section projects-section">
      <div className="section-inner">
        <div className="section-heading section-heading--row">
          <h2>Projects</h2>
        </div>
        <div className="projects-grid">
        <ProjectCard
          title="Escape the Room" 
          description="A simple interactive game where users try to escape from a locked room by clicking objects and finding clues. Features include smooth animations, button interactions, and a clean UI built using HTML, CSS, and JavaScript."
         
          link="https://hackathon-ashen-ten.vercel.app/"
          image="https://images.unsplash.com/photo-1511512578047-dfb367046420?w=900&h=650&fit=crop"
        />
        
        <ProjectCard
          title="To-Do-List" 
          description="A clean and responsive task-management app where users can add, delete, and mark tasks as completed. Designed with simple UI and smooth interactions to help users stay organized."
          
          link="https://to-do-list-xi-orpin-28.vercel.app/"
          image="https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=900&h=650&fit=crop"
        />
        
        <ProjectCard
          title="Recipe Website" 
          description="A user-friendly recipe website where users can explore different dishes with visuals. Built using HTML, CSS, and JavaScript with smooth navigation and responsive layout."
          
          link="https://recipe-five-flax.vercel.app/#booking"
          image="https://images.unsplash.com/photo-1495521821757-a1efb6729352?w=900&h=650&fit=crop"
        />
        
        <ProjectCard
          title="Learning Intern API" 
          description="A comprehensive API platform designed for learning and internship management. Features include user authentication, course management, and progress tracking with a modern backend architecture."
         
          link="https://learning-intern-api.vercel.app/"
          image="https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=900&h=650&fit=crop"
        />
        </div>
      </div>
    </section>
   
  )
}







