const express = require('express');
const nodemailer = require('nodemailer');
const router = express.Router();
require('dotenv').config();

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

router.post('/contact', async(req, res) => {
    try {
        const { fullName, phoneNumber, email, message } = req.body;
        const mailOptions = {
            from: email,
            to: process.env.EMAIL_USER,
            subject: `Contact Form Submission from ${fullName}`,
            text: `You have received a new message from your website contact form.\n\nHere are the details:\n\nName: ${fullName}\n\nEmail: ${email}\n\nPhone: ${phoneNumber}\n\nMessage:\n${message}`
        };
        await transporter.sendMail(mailOptions, (error, info) => {
            if(error) {
                console.log('Error:', error);
                return res.status(500).json({ error: 'Failed to send email' });
            }
            console.log('Email sent:', info.response);
            return res.status(200).json({ message: 'Email sent successfully' });
        });
    } catch(error) {
        console.log('Error:', error);
        return res.status(500).json({ error: 'Failed to send email' });
    }
});

module.exports = router;