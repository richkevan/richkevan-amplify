import QRCodes from "../components/Contact/qr_codes"
import styles from '../styles/Home.module.css'

const Contact_Page = () => {
    
    
    
    return (
        <div className={styles.container}>
            <h1>Contact</h1>
            <QRCodes />            
        </div>
    )
}

export default Contact_Page;