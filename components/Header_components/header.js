import Title from './title/title';
import NavBar from './nav/navbar';
import styles from './header.module.css';


const Heading = () => {

    return (
        <div className={styles.Header_div}>
        <Title className={styles.Header_title}/>
        <NavBar />
        </div>
    )
}

export default Heading;