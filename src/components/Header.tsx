import { useLocation, NavLink } from 'react-router-dom';
import styles from './header.module.css'


const navItems = [
    { path: '/', label: 'Home', icon: (<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-home"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M5 12l-2 0l9 -9l9 9l-2 0" /><path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" /><path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6" /></svg>) },
    { path: '/about', label: 'About', icon: (<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-user-circle"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" /><path d="M12 10m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" /><path d="M6.168 18.849a4 4 0 0 1 3.832 -2.849h4a4 4 0 0 1 3.834 2.855" /></svg>) },
    { path: '/projects', label: 'Projects', icon: (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-folder"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M5 4h4l3 3h7a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-11a2 2 0 0 1 2 -2" /></svg>) },
    { path: '/contact', label: 'Contact', icon: (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-mail"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z" /><path d="M3 7l9 6l9 -6" /></svg>) },
]

function Header() {
    const location = useLocation();
    const isActive = (path: string) => location.pathname === path

    return (
        <nav className='flex min-h-14 md:mb-6 px-2.5 py-3 items-center sticky bottom-0 md:top-0 z-50 flex-wrap gap-4'>
            <div className={`order-1 md:order-2 px-2 py-1 flex items-center mx-auto bg-[hsl(var(--clr-ice-blue-hsl)_,_0.13)] rounded-full  ${styles.navbarList}`}>
                {
                    navItems.map(({ path, label, icon }) => (
                        <NavLink className='' to={path}>
                            <span key={path} className={`hidden md:block ${styles.navItem} ${isActive(path) ? styles.active : ''}`}>
                                {label}
                            </span>
                            <span className={`md:hidden block ${styles.navItemSmall} ${isActive(path) ? styles.active : styles.navItemLabel}`}>
                                {icon}
                            </span>
                        </NavLink>
                    ))
                }
            </div>
        </nav>
    )
}

export default Header
