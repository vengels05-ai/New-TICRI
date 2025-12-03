export async function onRequestPost(context) {
  try {
    const { subject, message, email } = await context.request.json();

    if (!subject || !message) {
      return new Response(
        JSON.stringify({ error: 'Subject and message are required' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const emailBody = `
Subject: ${subject}

Message:
${message}

${email ? `From: ${email}` : 'No email provided'}
    `.trim();

    // Send email using SendGrid (works with Cloudflare Workers/Pages)
    const SENDGRID_API_KEY = context.env.SENDGRID_API_KEY || '';
    
    if (!SENDGRID_API_KEY) {
      // Fallback: just log it for now
      console.log('Email would be sent:', emailBody);
      return new Response(
        JSON.stringify({ success: true }),
        { status: 200, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const response = await fetch('https://api.sendgrid.com/v3/mail/send', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${SENDGRID_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        personalizations: [{
          to: [{ email: 'ticri2025@gmail.com' }],
        }],
        from: { email: 'noreply@new-ticri.pages.dev' },
        subject: `TICRI Contact: ${subject}`,
        content: [{
          type: 'text/plain',
          value: emailBody,
        }],
      }),
    });

    if (!response.ok) {
      throw new Error('Failed to send');
    }

    return new Response(
      JSON.stringify({ success: true }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('Error:', error);
    return new Response(
      JSON.stringify({ error: 'Failed to send email' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}
