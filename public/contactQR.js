import emailQR from './contact/email.png'
import textQR from './contact/text.png'
import callQR from './contact/call.png'

const ContactQR = {
    call: {
        method: 'tel:',
        target: '7077706843',
        qr: callQR
    },
    text: {
        method: 'sms://',
        target: '7077706843',
        qr: textQR
    },
    email: {
        method: 'mailto:',
        target: 'rskevan@me.com',
        qr: emailQR
    }
}

export default ContactQR