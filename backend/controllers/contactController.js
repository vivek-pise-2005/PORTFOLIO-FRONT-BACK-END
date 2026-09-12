import validator from 'validator';
import { ContactMessage } from '../models/ContactMessage.js';
import { sendContactNotification, sendVisitorConfirmation } from '../services/emailService.js';

export const submitContactForm = async (req, res, next) => {
  try {
    const { name, email, subject, message, botField } = req.body;

    // Honeypot spam trap
    if (botField) {
      console.warn('Spam bot honeypot triggered:', { ip: req.ip, botField });
      // Return 200 silently to foil bot
      return res.status(200).json({
        success: true,
        message: 'Your message has been dispatched successfully.'
      });
    }

    // Required fields check
    if (!name || !email || !subject || !message) {
      return res.status(400).json({
        success: false,
        message: 'All fields (name, email, subject, and message) are required.'
      });
    }

    // Validation
    const cleanName = validator.escape(name.trim());
    const cleanSubject = validator.escape(subject.trim());
    const cleanMessage = validator.escape(message.trim());

    if (!validator.isEmail(email.trim())) {
      return res.status(400).json({
        success: false,
        message: 'Please provide a valid email address.'
      });
    }

    if (cleanName.length < 2 || cleanName.length > 80) {
      return res.status(400).json({
        success: false,
        message: 'Name must be between 2 and 80 characters.'
      });
    }

    if (cleanSubject.length < 3 || cleanSubject.length > 150) {
      return res.status(400).json({
        success: false,
        message: 'Subject must be between 3 and 150 characters.'
      });
    }

    if (cleanMessage.length < 10 || cleanMessage.length > 5000) {
      return res.status(400).json({
        success: false,
        message: 'Message must be between 10 and 5000 characters.'
      });
    }

    // Store in DB / Repository
    const savedMessage = await ContactMessage.create({
      name: cleanName,
      email: email.trim().toLowerCase(),
      subject: cleanSubject,
      message: cleanMessage,
      ipAddress: req.ip || req.headers['x-forwarded-for'] || 'unknown',
      userAgent: req.headers['user-agent'] || 'unknown'
    });

    // Asynchronously dispatch notifications without blocking user response
    sendContactNotification({
      name: cleanName,
      email: email.trim().toLowerCase(),
      subject: cleanSubject,
      message: cleanMessage
    }).catch((err) => console.warn('Notification email error:', err.message));

    sendVisitorConfirmation({
      name: cleanName,
      email: email.trim().toLowerCase()
    }).catch((err) => console.warn('Visitor confirmation email error:', err.message));

    return res.status(201).json({
      success: true,
      message: 'Thank you! Your message has been received. Vivek will get back to you shortly.',
      data: {
        id: savedMessage._id,
        createdAt: savedMessage.createdAt
      }
    });
  } catch (error) {
    next(error);
  }
};
