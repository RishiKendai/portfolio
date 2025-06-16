import './experience.css'
import experiences from '../data/experience.json'

function Experience() {

  return (
    <>
      <title>Experience | Rishikendai Portfolio</title>
      <meta property="og:title" content="Experience | Rishikesh K M" />
      <meta name="twitter:title" content="Experience | Rishikesh K M" />
      <link rel="canonical" href="https://yourdomain.com/experience" />
      <section className='flex align-center justify-center py-6'>
        <div className="timeline relative w-full max-w-[1200px] flex flex-col pl-6 md:pl-4 pr-4">
          <div className="absolute top-0 md:left-1/2 transform -translate-x-1/2 h-full w-1 bg-[hsl(var(--clr-ice-blue-hsl)_,_0.53)] backdrop-blur-md z-0"></div>
          {
            experiences.experience.map((experience, index) => (
              <div key={'exp_' + index} className={`relative mb-9 w-full md:w-1/2  ${!(index & 1) ? 'md:self-start self-end pr-0 pl-8 md:pl-0 md:pr-8' : 'self-end pl-8'}`}>
                <div className={`absolute z-1 rounded-full w-8 h-8 flex items-center justify-center ${experience.type === 'work' ? 'bg-[var(--clr-secondary)]' : 'bg-[var(--clr-accent)]'} ${!(index & 1) ? 'md:-right-4 md:left-auto -left-4' : '-left-4'}`}>{experience.type === 'work'
                  ? <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-briefcase"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M3 7m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z" /><path d="M8 7v-2a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v2" /><path d="M12 12l0 .01" /><path d="M3 13a20 20 0 0 0 18 0" /></svg>
                  : <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-school"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M22 9l-10 -4l-10 4l10 4l10 -4v6" /><path d="M6 10.6v5.4a6 3 0 0 0 12 0v-5.4" /></svg>
                }
                </div>
                <div className="timeline-item px-8 py-7 bg-[hsl(var(--clr-ice-blue-hsl)_,_0.04)] backdrop-blur-md w-full rounded-3xl">
                  <h5 className={`mb-1 text-[28px] ft-title ${experience.type === 'work' ? 'text-[var(--clr-secondary)]' : 'text-[var(--clr-accent)]'}`}>{experience.title} | {experience.organization}</h5>
                  <span className='mb-1.5 flex items-center opacity-60 text-sm'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="mr-1 icon icon-tabler icons-tabler-filled icon-tabler-map-pin"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M18.364 4.636a9 9 0 0 1 .203 12.519l-.203 .21l-4.243 4.242a3 3 0 0 1 -4.097 .135l-.144 -.135l-4.244 -4.243a9 9 0 0 1 12.728 -12.728zm-6.364 3.364a3 3 0 1 0 0 6a3 3 0 0 0 0 -6z" /></svg>
                    {experience.location}
                  </span>
                  <span className='opacity-40 text-xs block mb-5'>{experience.duration}</span>
                  <span className='text-base p-0 leading-7 text-white opacity-90 mb-4 block'>{experience.highlights}</span>
                  <div className='flex flex-wrap gap-2'>
                    {experience.skills.map((skill, index) => (
                      <span key={'skill_' + index} className='mr-2 px-3 py-1.5 rounded-full bg-[var(--clr-ice-blue)] text-[var(--clr-primary)] font-semibold text-xs'>{skill}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </section>
    </>
  )
}

export default Experience