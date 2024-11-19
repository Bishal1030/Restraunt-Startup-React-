const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");

router.post('/', (req, res) => {
    const { Email, comments, name } = req.body;

    console.log("Received email:", Email);

    // Nodemailer setup
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'bishal4shahi@gmail.com',
            pass: 'dexl uqmf whxk xljc' // Use environment variables for security
        }
    });

    const mailOptions = {
        from: 'bishal4shahi@gmail.com',
        to: Email,  // Send to the email received from the frontend
        subject: 'Your appointment form has been submitted',
        text: comments,
        html: `<html lang="en">
            <body>
                <h1>Thank You! For Subscribing !! We'll get in touch with you</h1>
            </body>
        </html>`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error(error);
            res.status(500).send('Error sending email');
        } else {
            console.log('Email sent: ' + info.response);
            res.status(200).send('Email sent successfully');
        }
    });
});

module.exports = router;
