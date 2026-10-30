import React from 'react'

const ExternalIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14 21 3"/>
  </svg>
)

const ProjectCard = ({ title, description, link, image, index }) => (
  <article className="project-item" data-reveal data-reveal-delay={index % 2 === 1 ? '1' : '0'}>
    {/* Index label */}
    <span className="project-index" aria-hidden="true">
      {String(index).padStart(2, '0')}
    </span>

    {/* Image + overlay */}
    <a className="project-image" href={link} target="_blank" rel="noreferrer" aria-label={`View ${title}`}>
      <img src={image} alt={title} />
      {/* Hover overlay with CTA */}
      <div className="project-overlay">
        <div className="project-overlay-links">
          <span className="project-overlay-link">
            <ExternalIcon />
            Live Demo
          </span>
        </div>
      </div>
      {/* Default corner badge */}
      <span className="project-open" aria-hidden="true">↗</span>
    </a>

    {/* Text */}
    <div className="project-copy">
      <h3>
        <a href={link} target="_blank" rel="noreferrer">{title}</a>
      </h3>
      <p>{description}</p>
    </div>
  </article>
)

export default function Projects() {
  const projects = [
    {
      title:       'Smart Campus',
      description: 'A modern campus platform designed to bring student services, academic information, and campus resources into one accessible web experience.',
      link:        'https://smart-campus-three-khaki.vercel.app/#',
      image:       'https://images.unsplash.com/photo-1564981797816-1043664bf78d?w=900&h=650&fit=crop',
    },
    {
      title:       'AI Portfolio Generator',
      description: 'An AI-powered portfolio generator that helps users create polished personal websites with a streamlined and responsive experience.',
      link:        'https://ai-portfolio-generator-seven.vercel.app/',
      image:       'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&h=650&fit=crop',
    },
    {
      title:       'GitHub Explorer',
      description: 'A comprehensive API platform designed for learning and internship management. Features include user authentication, course management, and progress tracking with a modern backend architecture.',
      link:        'https://learning-intern-api.vercel.app/',
      image:       'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=900&h=650&fit=crop',
    },
    {
      title:       'Feedback Tracker - In Progress',
      description: 'In progress: a modern frontend web experience focused on responsive design, clean interactions, and a polished user interface.',
      link:        'https://frontend-ten-dun-ygq2veykm6.vercel.app/',
      image:       'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=900&h=650&fit=crop',
    },
    {
      title:       'Escape the Room',
      description: 'A simple interactive game where users try to escape from a locked room by clicking objects and finding clues. Features include smooth animations, button interactions, and a clean UI built using HTML, CSS, and JavaScript.',
      link:        'https://hackathon-ashen-ten.vercel.app/',
      image:       'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=900&h=650&fit=crop',
    },
    {
      title:       'To-Do-List',
      description: 'A clean and responsive task-management app where users can add, delete, and mark tasks as completed. Designed with simple UI and smooth interactions to help users stay organized.',
      link:        'https://to-do-list-xi-orpin-28.vercel.app/',
      image:       'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=900&h=650&fit=crop',
    },
    {
      title:       'Recipe Website',
      description: 'A user-friendly recipe website where users can explore different dishes with visuals. Built using HTML, CSS, and JavaScript with smooth navigation and responsive layout.',
      link:        'https://recipe-five-flax.vercel.app/#booking',
      image:       'https://images.unsplash.com/photo-1495521821757-a1efb6729352?w=900&h=650&fit=crop',
    },
  ]

  return (
    <section id="projects" className="editorial-section projects-section">
      <div className="section-inner">
        <div data-reveal>
          <span className="section-label">Selected Work</span>
          <div className="section-heading">
            <h2>Projects</h2>
          </div>
        </div>

        <div className="projects-grid">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} {...project} index={i + 1} />
          ))}
        </div>
      </div>
    </section>
  )
}
