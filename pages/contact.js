import Image from 'next/image'
import { useState } from "react";
import contactQR from '../public/contactQR'

const Contact_Page = () => {
    const [contactObj, setContactObj] = useState(contactQR);
    
    
    return (
        <div>
        <h1>Contact</h1>
        { Object.keys(contactObj).map(key => {
            return (
                <div key={contactObj[key].method}>
                    <Image src={contactObj[key].qr} alt={contactObj[key].method} width={500} height={500} />
                </div>
            )
        })}
        </div>
    )
}

export default Contact_Page;