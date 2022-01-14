import { useState, useEffect } from "react"
import QRCodes from "@components/Contact/qr_codes"
import pageStyle from '@styles/Contact.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCaretSquareLeft, faCaretSquareRight } from "@fortawesome/free-solid-svg-icons"

const Contact_Page = () => {
    const [contactObj, setContactObj] = useState(null);
    const [count, setCount] = useState(0);

    useEffect(() => {
        setContactObj(document.getElementsByClassName('contactLink'));
    },[])
    
    const handleClick = (e) => {
        if (e.target.id.includes('left')) {
            contactObj[count-1].scrollIntoView({behavior: 'smooth'})
            setCount(count-1)
        }
        if (e.target.id.includes('right')) {
            contactObj[count+1].scrollIntoView({behavior: 'smooth'})
            setCount(count+1)
        }
    }
    
    return (
        <div className={pageStyle.pageContainer}>
            <h1>Contact</h1>
            <div className={pageStyle.contactContainer}>
            <form id={pageStyle.contactForm}>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" placeholder="Name" />
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" placeholder="Email" />
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" placeholder="Message" rows={5}/>
            </form>
            {count !== 0 && <FontAwesomeIcon icon={faCaretSquareLeft} className={`${pageStyle.caretSquare} fa-4x left`} id={pageStyle.left} onClick={handleClick}/>}
            <div className={pageStyle.qrScroll}>
            <QRCodes />
            </div>
            {count !== 2 && <FontAwesomeIcon icon={faCaretSquareRight} className={`${pageStyle.caretSquare} fa-4x right`} id={pageStyle.right} onClick={handleClick}/>}
            </div> 
        </div>
    )
}

export default Contact_Page;