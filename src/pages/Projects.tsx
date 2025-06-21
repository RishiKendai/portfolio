import projects from '../data/projects.json'

function Projects() {
  return (
    <>
      <title>Projects | Rishikendai Portfolio</title>
      <meta property="og:title" content="Projects | Rishikesh K M" />
      <meta name="twitter:title" content="Projects | Rishikesh K M" />

      <link rel="canonical" href="https://yourdomain.com/projects" />
      <section className='flex flex-1 align-center  py-6 flex-col px-3'>
        <div className='md:px-11 columns-1 md:columns-2 gap-x-6 gap-y-6 max-w-[1200px] justify-center mb-9'>
          {
            projects.projects.map((project, index) => {
              return (
                <div className="group project mb-6 relative overflow-hidden rounded-[28px] max-h-[480px] z-1" key={index}>
                  <div className="absolute inset-0 overflow-hidden rounded-b-lg shadow-md">
                    <img loading='lazy' decoding='async' className='w-full h-full object-cover transition-transform duration-400 ease md:group-hover:scale-110' src={project.image} alt={project.title} />
                  </div>
                  <div className="h-full w-full absolute inset-0 bg-[linear-gradient(to_top,_#00000094,_#00000084_30%,_transparent)] backdrop-blur-[28px] brightness-85 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-400 ease"></div>
                  <div className="relative py-2 px-4 md:translate-y-12 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100 transition-all duration-400 ease">
                    <h5 className='mb-4 text-[28px] ft-title text-[var(--clr-secondary)]'>{project.title}</h5>
                    <p className='text-sm leading-6 mb-5'>{project.description}</p>
                    <div className='tech-stack flex flex-wrap gap-2 mb-9'>
                      {
                        project.techStack.map((tech, index) => {
                          return (
                            <span className='text-sm px-4 py-1.5 rounded-full bg-[var(--clr-ice-blue)] backdrop-blur-[32px] text-[var(--clr-primary)] font-semibold' key={`tech_${index}`}>{tech}</span>
                          )
                        })
                      }
                    </div>

                    {/* link */}
                    <div className='mx-auto gap-6 w-100% flex justify-center pt-5 pb-3 border-t border-[hsl(var(--clr-ice-blue-hsl)_,_0.14)]'>
                      {project.links.live ? <a href={project.links.live} target="_blank" className='rounded-full w-fit text-sm px-3 py-2 flex items-center gap-1 bg-[var(--clr-secondary)] font-bold'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-link"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M9 15l6 -6" /><path d="M11 6l.463 -.536a5 5 0 0 1 7.071 7.072l-.534 .464" /><path d="M13 18l-.397 .534a5.068 5.068 0 0 1 -7.127 0a4.972 4.972 0 0 1 0 -7.071l.524 -.463" /></svg>
                        Live
                      </a> : ''}
                      <a href={project.links.code} target="_blank" className='rounded-full w-fit text-sm px-3 py-2 flex items-center gap-1 bg-[var(--clr-accent)] font-bold'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-code"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M7 8l-4 4l4 4" /><path d="M17 8l4 4l-4 4" /><path d="M14 4l-4 16" /></svg>
                        Code
                      </a>
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>
        <a className='text-[var(--clr-secondary)] font-bold rounded-full py-3 px-6 mx-auto bg-white' href="https://github.com/RishiKendai" target="_blank" rel="noopener noreferrer">Explore More works</a>
      </section>
    </>
  )
}

export default Projects
