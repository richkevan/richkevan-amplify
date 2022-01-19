import { useState, useEffect } from "react"
import * as Fathom from 'fathom-client'
import QRCodes from "@components/Contact/qr_codes"
import pageStyle from '@styles/Contact.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCaretSquareLeft, faCaretSquareRight } from "@fortawesome/free-solid-svg-icons"

const Contact_Page = () => {
    const [contactObj, setContactObj] = useState(null);
    const [count, setCount] = useState(0);
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: "",
        submit: false
    });

    useEffect(() => {
        setContactObj(document.getElementsByClassName('contactLink'));
    },[])

    const handleChange = (e) => {
        console.log(e.target.name, e.target.id)
        setForm(Object.assign({}, form, { [e.target.name]: e.target.value }))
        console.log(form, e.target.value)
    }
    
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

    const handleSubmit = (e) => {
        e.preventDefault()
        Fathom.trackGoal('IIM94VBO', 0)
    
        fetch('/api/contact', {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
        },
        body: JSON.stringify(form)
        }).then((res) => {
            console.log('Response Received')
            if (res.status === 200) {
                setForm({
                    name: "",
                    email: "",
                    message: "",
                    submit: true
                })
            }
        })
    }
    
    return (
        <div className={pageStyle.pageContainer}>
            <h1>Contact</h1>
            <div className={pageStyle.contactContainer}>
            <form id={pageStyle.contactForm}>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" placeholder="Name" onChange={handleChange}/>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" placeholder="Email" onChange={handleChange}/>
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" placeholder="Message" rows={5} onChange={handleChange}/>
                <input type="submit" value="Submit" onClick={handleSubmit}/>
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