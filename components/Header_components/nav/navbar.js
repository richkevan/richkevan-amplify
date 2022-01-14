import { useState, useEffect } from 'react';
import Link from 'next/link'
import style from '@styles/Navigation.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Navbar = () => {
    const [windowSize, setWindowSize] = useState(927);
    const [menu, setMenu] = useState({
            Home: {
                href: '/',
                icon: 'home',
                name: 'Home'
            },
            Portfolio: {
                href: '/portfolio',
                icon: 'briefcase',
                name: 'Portfolio'
            },
            Resume: {
                href: '/resume',
                icon: 'file-alt',
                name: 'Resume'
            },
            Contact: {
                href: '/contact',
                icon: 'envelope',
                name: 'Contact'
            },
            Blog: {
                href: '/blog',
                icon: 'blog',
                name: 'Blog'
            }
    });

    useEffect(() => {
        window.addEventListener('resize', () => {
            setWindowSize(window.innerWidth);
            console.log(window.devicePixelRatio);
            console.log(navigator.userAgent);
        })
    }, [windowSize])


    return (
        <nav className={style.Header_nav}>
            {Object.keys(menu).map((key) => {
                return (
                    <Link href={menu[key].href} key={key}>
                           {windowSize >= 927 ? <span className={style.Nav_link}>{menu[key].name}</span>:<FontAwesomeIcon icon={menu[key].icon} />} 
                    </Link>
                )
            })}
        </nav>
    )
}

export default Navbar;