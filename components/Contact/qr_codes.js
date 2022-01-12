import { useState } from "react";
import Image from "next/image"
import contactQR from '@public/contactQR'
import styles from '@styles/Contact.module.css'

const QRCodes = () => {
    const [contactObj, setContactObj] = useState(contactQR);


    return (
        <div className={styles.qrContainer}>
                { Object.keys(contactObj).map(key => {
                    return (
                        <a href={`${contactObj[key].method}${contactObj[key].target}`} key={contactObj[key].method} className="contactLink">
                        <Image src={contactObj[key].qr} alt={contactObj[key].method} layout='responsive' priority='true'/>
                        </a>
                    )
                })}
            </div>
    )
}

export default QRCodes