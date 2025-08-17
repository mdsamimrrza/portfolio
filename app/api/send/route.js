import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Validate environment variables
function validateEnv() {
  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
    throw new Error('Email configuration is missing. Please check your environment variables.');
  }
}

// Validate form data
function validateFormData({ name, email, subject, message }) {
  if (!name || !email || !subject || !message) {
    throw new Error('All fields are required');
  }
  
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    throw new Error('Please enter a valid email address');
  }
}

export async function POST(request) {
  try {
    const formData = await request.json();
    const { name, email, subject, message } = formData;

    // Validate form data
    validateFormData(formData);
    
    // Validate environment variables
    validateEnv();

    console.log('Creating transporter...');
    // Create a Nodemailer transporter with more options
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      host: 'smtp.gmail.com', // Explicit SMTP server
      port: 587, // Standard port for secure SMTP
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      tls: {
        rejectUnauthorized: false // Only for development with self-signed certificates
      }
    });

    console.log('Sending email...');
    // Email options
    const mailOptions = {
      from: `"${name}" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER, // Your email
      replyTo: email, // So you can reply directly to the sender
      subject: `[Portfolio Contact] ${subject}`,
      text: `
        Name: ${name}
        Email: ${email}
        
        Message:
        ${message}
      `,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
        <p><strong>Subject:</strong> ${subject}</p>
        <h3>Message:</h3>
        <p>${message.replace(/\n/g, '<br>')}</p>
        <hr>
        <p>This message was sent from your portfolio contact form.</p>
      `,
    };

    // Send email with timeout
    const sendEmail = () => new Promise((resolve, reject) => {
      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.error('Email send error:', error);
          reject(new Error('Failed to send email. Please try again later.'));
        } else {
          console.log('Email sent:', info.response);
          resolve(info);
        }
      });
    });

    await sendEmail();
    return NextResponse.json({ success: true, message: 'Message sent successfully!' });
    
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json(
      { 
        success: false, 
        error: error.message || 'An error occurred while sending the message',
        details: process.env.NODE_ENV === 'development' ? error.stack : undefined
      },
      { status: 500 }
    );
  }
}
