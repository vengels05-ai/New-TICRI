import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const { subject, message, email } = await request.json();

    // Validate required fields
    if (!subject || !message) {
      return NextResponse.json(
        { error: 'Subject and message are required' },
        { status: 400 }
      );
    }

    // Check if email configuration is set
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASSWORD) {
      console.error('Email configuration missing. Please set EMAIL_USER and EMAIL_PASSWORD environment variables.');
      return NextResponse.json(
        { error: 'Email service not configured. Please contact the administrator.' },
        { status: 503 }
      );
    }

    // Create transporter using Gmail
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    // Email content
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'ticri2025@gmail.com',
      subject: `TICRI Contact Form: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #0F2C47; border-bottom: 3px solid #C41E3A; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          
          <div style="margin: 20px 0;">
            <h3 style="color: #1A3A5C;">Subject:</h3>
            <p style="background-color: #f5f5f5; padding: 10px; border-left: 4px solid #C41E3A;">
              ${subject}
            </p>
          </div>

          <div style="margin: 20px 0;">
            <h3 style="color: #1A3A5C;">Message:</h3>
            <div style="background-color: #f5f5f5; padding: 15px; border-left: 4px solid #C41E3A; white-space: pre-wrap;">
              ${message}
            </div>
          </div>

          ${email ? `
          <div style="margin: 20px 0;">
            <h3 style="color: #1A3A5C;">Sender Email:</h3>
            <p style="background-color: #f5f5f5; padding: 10px; border-left: 4px solid #C41E3A;">
              ${email}
            </p>
          </div>
          ` : ''}

          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ccc; color: #666; font-size: 12px;">
            <p>This message was sent from the TICRI contact form.</p>
            <p>Time: ${new Date().toLocaleString()}</p>
          </div>
        </div>
      `,
      text: `
Subject: ${subject}

Message:
${message}

${email ? `Sender Email: ${email}` : ''}

---
Sent from TICRI contact form
Time: ${new Date().toLocaleString()}
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}
