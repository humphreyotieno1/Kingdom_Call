const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');
const Joi = require('joi'); // Import Joi
require('dotenv').config();

const app = express();
const corsOptions = {
  origin: ['https://kingdom-call.vercel.app/', 'http://localhost:5173'], // Add your frontend domain here
  methods: ['GET', 'POST'],
};
app.use(cors(corsOptions));
app.use(bodyParser.json());

// Configure nodemailer
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

const contactSchema = Joi.object({
  name: Joi.string().min(3).required().messages({
    'string.empty': 'Name is required.',
    'string.min': 'Name must be at least 3 characters long.',
  }),
  phone: Joi.string().pattern(/^[0-9]{10,15}$/).required().messages({
    'string.pattern.base': 'Phone must be a valid number (10-15 digits).',
    'string.empty': 'Phone is required.',
  }),
  email: Joi.string().email().required().messages({
    'string.email': 'Email must be a valid email address.',
    'string.empty': 'Email is required.',
  }),
  message: Joi.string().min(10).required().messages({
    'string.min': 'Message must be at least 10 characters long.',
    'string.empty': 'Message is required.',
  }),
});

// Route to handle contact form submissions
app.post('/v1/contact', async (req, res) => {
  const { name, phone, email, message } = req.body;

  // Validate input using Joi
  const { error } = contactSchema.validate({ name, phone, email, message });
  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }

  // Email options
  const mailOptions = {
    from: `${name} <${email}>`, // Dynamic sender (user's email)
    to: process.env.RECEIVER_EMAIL, // Static receiver (company's email)
    subject: `Contact Form Submission from ${name}`,
    text: `
      You have a new contact form submission:
      
      Name: ${name}
      Phone: ${phone}
      Email: ${email}
      Message: ${message}
    `,
  };

  try {
    // Send email
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Message sent successfully!' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ error: 'Failed to send message. Please try again later.' });
  }
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
