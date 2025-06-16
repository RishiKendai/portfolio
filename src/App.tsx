import Profile from './assets/profile.png'
import Gradient from './assets/gradient.webp'

import styles from './app.module.css'

function App() {
  return (
    <>
      <title>Home | Rishikendai Portfolio</title>
      <meta property="og:title" content="Home | Rishikesh K M" />
      <meta name="twitter:title" content="Home | Rishikesh K M" />
      <link rel="canonical" href="https://yourdomain.com/" />
      <section className={`flex flex-col md:flex-row h-fit  pl-2 md:pl-[70px] py-6`}>
        <div className={`${styles.right} md:order-2 pt-16`}>
          <div className={styles.profileBlock}>
            <img
              src={Profile}
              alt="profile"
              className={styles.profile}
              loading='eager'
              height={200}
              width={200}
              fetchPriority='high'
              decoding='async'
            />
            <img src={Gradient} alt="profile gradient" className={styles.profileGradientShape}
              height={200}
              width={200}
              loading='lazy'
              fetchPriority='low'
              decoding='async'
              aria-hidden="true"
            />
          </div>
        </div>
        <div className={`${styles.left} md:order-1 flex flex-col`}>
          <div className='mb-6'>
            <span className='ft-style text-5xl'>Hi There,</span>
            <h5 className='ft-title text-4xl text-[var(--clr-secondary)]'>I'm Rishikesh</h5>
            <span className='ft-title text-xl opacity-80'>Software Engineer</span>
            <span className='flex items-center opacity-60'>
              <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="mr-1 icon icon-tabler icons-tabler-filled icon-tabler-map-pin"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M18.364 4.636a9 9 0 0 1 .203 12.519l-.203 .21l-4.243 4.242a3 3 0 0 1 -4.097 .135l-.144 -.135l-4.244 -4.243a9 9 0 0 1 12.728 -12.728zm-6.364 3.364a3 3 0 1 0 0 6a3 3 0 0 0 0 -6z" /></svg>
              <span>Madurai, India</span>
            </span>
          </div>
          <p className='justify text-base leading-7 mb-5'>
            Innovative and detail-oriented software engineer with a passion for crafting seamless, high-performance applications. Adept at solving
            complex challenges. Continuously evolving with emerging technologies to
            drive impact solutions.
          </p>
          <a rel="noreferrer" aria-label='Download Resume' href="Rishikesh_resume.pdf" download={true} className={`${styles.resumeLink} ml-auto mr-6 mb-9 relative`}>
            <button className={styles.resumeButton}>Resume </button>
            <span></span>
          </a>

          <blockquote aria-label='Quote from Rishikesh' className="text-[#99FFFF] font-bold ft-title text-xl md:text-2xl max-w-xl px-2">
            “Experience is the first and the best teacher you can ever have in your life.”
            <cite className="block text-right text-[var(--clr-secondary)] mt-1">- Rishikesh</cite>
          </blockquote>
        </div>
      </section>
    </>

  )
}

export default App