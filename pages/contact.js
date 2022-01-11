import { useState, useEffect } from "react"
import QRCodes from "@components/Contact/qr_codes"
import styles from '@styles/Home.module.css'
import pageStyle from '@styles/Contact.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCaretSquareLeft, faCaretSquareRight } from "@fortawesome/free-solid-svg-icons"

const Contact_Page = () => {
    const [contactObj, setContactObj] = useState(null);
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log(count)
        setContactObj(document.getElementsByClassName('contactLink'));
    },[])
    
    const handleClick = (e) => {
        console.log(count)
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
        <div className={styles.container}>
            <h1>Contact</h1>
            {count !== 0 && <FontAwesomeIcon icon={faCaretSquareLeft} className={`${pageStyle.caretSquare} fa-4x left`} id={pageStyle.left} onClick={handleClick}/>}
            <div className={pageStyle.qrScroll}>
            <QRCodes />
            </div>
            {count !== 2 && <FontAwesomeIcon icon={faCaretSquareRight} className={`${pageStyle.caretSquare} fa-4x right`} id={pageStyle.right} onClick={handleClick}/>}   
        </div>
    )
}

export default Contact_Page;