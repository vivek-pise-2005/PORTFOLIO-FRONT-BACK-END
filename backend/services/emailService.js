import nodemailer from 'nodemailer';

let transporter = null;

const initTransporter = () => {
  if (process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS) {
    transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || '587', 10),
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS
      }
    });
    console.log('📧 Real SMTP Email Transporter initialized.');
  } else {
    console.log('ℹ️ SMTP credentials not fully configured. Using mock email service (messages logged to console).');
  }
};

export const sendContactNotification = async ({ name, email, subject, message }) => {
  if (!transporter) initTransporter();

  const recipient = process.env.CONTACT_RECEIVER_EMAIL || 'vivek.pise.10@gmail.com';
  const mailOptions = {
    from: `"Portfolio Contact Alert" <${process.env.SMTP_FROM || 'noreply@vivekpise.dev'}>`,
    to: recipient,
    replyTo: email,
    subject: `🔔 New Portfolio Message: ${subject} (from ${name})`,
    html: `
      <div style="font-family: Arial, sans-serif; background: #0b0f19; color: #f3f4f6; padding: 24px; border-radius: 8px;">
        <h2 style="color: #38bdf8; border-bottom: 2px solid #1e293b; padding-bottom: 12px;">New Contact Submission</h2>
        <p><strong>From:</strong> ${name} &lt;${email}&gt;</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <div style="background: #111827; padding: 16px; border-radius: 6px; border-left: 4px solid #38bdf8; margin: 16px 0;">
          <p style="white-space: pre-wrap; margin: 0; line-height: 1.6;">${message}</p>
        </div>
        <p style="color: #94a3b8; font-size: 12px;">Received on: ${new Date().toLocaleString()}</p>
      </div>
    `
  };

  if (transporter) {
    try {
      await transporter.sendMail(mailOptions);
      return { success: true, delivered: true };
    } catch (err) {
      console.error('Failed to dispatch notification email via SMTP:', err.message);
      return { success: true, delivered: false, error: err.message };
    }
  } else {
    console.log('📬 [MOCK EMAIL DISPATCH TO VIVEK]:', {
      to: recipient,
      from: email,
      subject,
      contentPreview: message.substring(0, 100) + '...'
    });
    return { success: true, delivered: false, mock: true };
  }
};

export const sendVisitorConfirmation = async ({ name, email }) => {
  if (!transporter) initTransporter();

  const mailOptions = {
    from: `"Vivek Sunil Pise" <${process.env.SMTP_FROM || 'vivek.pise.10@gmail.com'}>`,
    to: email,
    subject: `Thank you for reaching out! — Vivek Sunil Pise`,
    html: `
      <div style="font-family: Arial, sans-serif; background: #0b0f19; color: #f3f4f6; padding: 24px; border-radius: 8px;">
        <h2 style="color: #34d399; margin-bottom: 16px;">Hello ${name},</h2>
        <p style="line-height: 1.6;">Thank you for getting in touch through my portfolio. I have received your message and will review it and get back to you as soon as possible.</p>
        <div style="margin: 20px 0; padding: 14px; background: #111827; border-radius: 6px;">
          <p style="margin: 4px 0;"><strong>Direct Email:</strong> vivek.pise.10@gmail.com</p>
          <p style="margin: 4px 0;"><strong>Phone:</strong> +91 9022763684</p>
          <p style="margin: 4px 0;"><strong>Focus:</strong> Data Science, Data Analytics & Software Engineering</p>
        </div>
        <p style="color: #94a3b8; font-size: 13px;">Best regards,<br><strong style="color: #f3f4f6;">Vivek Sunil Pise</strong><br>Electronics & Telecommunication Engineer</p>
      </div>
    `
  };

  if (transporter) {
    try {
      await transporter.sendMail(mailOptions);
      return { success: true, delivered: true };
    } catch (err) {
      console.warn('Could not send visitor confirmation email:', err.message);
      return { success: true, delivered: false };
    }
  } else {
    console.log(`📬 [MOCK AUTO-RESPONDER TO VISITOR ${email}]: "Message received confirmation."`);
    return { success: true, delivered: false, mock: true };
  }
};
