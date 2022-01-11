import Link from 'next/link'
import NavBar from '@components/Header_components/nav/navbar.js';
import style from '@styles/Navigation.module.css';

const Heading = () => {

    return (
        <div className={style.Header_div}>
        <Link href='/' passHref className={style.Header}><a><h1>Rich Kevan</h1></a></Link>
        <NavBar />
        </div>
    )
}

export default Heading;