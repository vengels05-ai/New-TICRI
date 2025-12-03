export async function onRequestPost(context) {
  try {
    const { subject, message, email } = await context.request.json();

    // Validate required fields
    if (!subject || !message) {
      return new Response(
        JSON.stringify({ error: 'Subject and message are required' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Get environment variables
    const EMAIL_USER = context.env.EMAIL_USER;
    const EMAIL_PASSWORD = context.env.EMAIL_PASSWORD;

    if (!EMAIL_USER || !EMAIL_PASSWORD) {
      console.error('Email configuration missing');
      return new Response(
        JSON.stringify({ error: 'Email service not configured. Please contact the administrator.' }),
        { status: 503, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Prepare email content for MailChannels (free for Cloudflare)
    const emailContent = `
TICRI Contact Form Submission

Subject: ${subject}

Message:
${message}

${email ? `Reply-to Email: ${email}` : 'No email provided'}

---
Sent: ${new Date().toLocaleString()}
    `.trim();

    // Send email using MailChannels API (free for Cloudflare Pages/Workers)
    const mailResponse = await fetch('https://api.mailchannels.net/tx/v1/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        personalizations: [
          {
            to: [{ email: 'vengels05@gmail.com', name: 'TICRI' }],
            dkim_domain: 'new-ticri.pages.dev',
            dkim_selector: 'mailchannels',
          },
        ],
        from: {
          email: 'noreply@new-ticri.pages.dev',
          name: 'TICRI Contact Form',
        },
        reply_to: email ? { email: email } : { email: 'vengels05@gmail.com' },
        subject: `TICRI Contact Form: ${subject}`,
        content: [
          {
            type: 'text/plain',
            value: emailContent,
          },
        ],
      }),
    });

    if (!mailResponse.ok) {
      const errorText = await mailResponse.text();
      console.error('MailChannels error:', errorText);
      throw new Error(`MailChannels API error: ${mailResponse.status}`);
    }

    return new Response(
      JSON.stringify({ success: true }),
      {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return new Response(
      JSON.stringify({ 
        error: 'Failed to send email. Please try again later.',
        details: error.message 
      }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }
}
