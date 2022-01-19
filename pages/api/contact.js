/* eslint-disable import/no-anonymous-default-export */
import nodemailer from 'nodemailer';

export default function (req, res) {
    let nodemailer = require('nodemailer');
    let transporter = nodemailer.createTransport({
        port: 465,
        host: process.env.REACT_APP_STMP_ENDPOINT,
        auth: {
            user: process.env.REACT_APP_STMP_USERNAME,
            pass: process.env.REACT_APP_STMP_PASSWORD
        },
        secure: true
    })
    const mailData = {
        from: `${req.body.email}`,
        to: 'rskevan@me.com',
        subject: 'Richkevan.com Contact Form',
        text: `${req.body.name} (${req.body.email}) says: ${req.body.message}`,
        html: `<p>${req.body.name} (${req.body.email}) says: ${req.body.message}</p>`
    }
    transporter.sendMail(mailData, (err, info) => {
        if (err) {
            console.log(err)
            res.status(500).send(err)
        } else {
            console.log(info)
            res.status(200).send(info)
        }
    })
    console.log(req.body)
}