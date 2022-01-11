import { useState, useEffect } from 'react';
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faFileAlt, faEnvelope, faBlog, faHome } from '@fortawesome/free-solid-svg-icons';
import style from '@styles/Navigation.module.css';

const Navbar = () => {
    const [windowSize, setWindowSize] = useState(0);
    const [menu, setMenu] = useState({
            Home: {
                href: '/',
                icon: faHome,
                name: 'Home'
            },
            Portfolio: {
                href: '/portfolio',
                icon: faBriefcase,
                name: 'Portfolio'
            },
            Resume: {
                href: '/resume',
                icon: faFileAlt,
                name: 'Resume'
            },
            Contact: {
                href: '/contact',
                icon: faEnvelope,
                name: 'Contact'
            },
            Blog: {
                href: '/blog',
                icon: faBlog,
                name: 'Blog'
            }
    });

    useEffect(() => {
        window.addEventListener('resize', () => {
            setWindowSize(window.innerWidth);
            console.log(windowSize);
        })
        console.log(windowSize);
    }, [windowSize])


    return (
        <nav className={style.Header_nav}>
            {Object.keys(menu).map((key) => {
                return (
                    <Link href={menu[key].href} key={key} passHref>
                           {windowSize <= 390 ? <FontAwesomeIcon className="fa-3x" icon={menu[key].icon} />:<span className={style.Nav_link}>{menu[key].name}</span>} 
                            
                    </Link>
                )
            })}
        </nav>
    )
}

export default Navbar;