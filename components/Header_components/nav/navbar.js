import Link from 'next/link'
import styles from '../header.module.css'

const Navbar = () => {
    
    return (
        <nav className={styles.Header_nav}>
            <Link href='/portfolio'>Portfolio</Link>
            <Link href='/resume'>Resume</Link>
            <Link href='/contact'>Contact</Link>
            <Link href='/blog'>Blog</Link>
        </nav>
    )
}

export default Navbar;