import Link from 'next/link'
import style from '@styles/Navigation.module.css'
import NavBar from '@components/Header_components/nav/navbar.js'


const Heading = () => {

    return (
        <div className={style.Header_div}>
        <Link href='/' passHref className={style.Header}><strong>Rich Kevan</strong></Link>
        <NavBar />
        </div>
    )
}

export default Heading;