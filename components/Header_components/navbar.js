import Link from 'next/link'

const Navbar = () => {
    
    return (
        <nav>
            <h3>Nav</h3>
            <Link href='/portfolio'>Portfolio</Link>
            <Link href='/resume'>Resume</Link>
            <Link href='/about'>About</Link>
            <Link href='/contact'>Contact</Link>
            <Link href='/blog'>Blog</Link>
        </nav>
    )
}

export default Navbar;