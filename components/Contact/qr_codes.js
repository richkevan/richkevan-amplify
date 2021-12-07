import { useState } from "react";
import Image from "next/image"
import contactQR from '../../public/contactQR'
import styles from './qr.module.css'

const QRCodes = () => {
    const [contactObj, setContactObj] = useState(contactQR);


    return (
        <div className={styles.qrContainer}>
                { Object.keys(contactObj).map(key => {
                    return (
                        <a href={`${contactObj[key].method}${contactObj[key].target}`} key={contactObj[key].method}>
                        <Image src={contactObj[key].qr} alt={contactObj[key].method} layout='fixed' height='300px' width='300px' />
                        </a>
                    )
                })}
            </div>
    )
}

export default QRCodes