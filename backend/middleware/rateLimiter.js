import rateLimit from 'express-rate-limit';

// Rate limiter for contact submissions: max 10 requests per 15 minutes per IP
export const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 10,
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    success: false,
    message: 'Too many messages submitted from this IP. Please try again in 15 minutes.'
  }
});

// Rate limiter for AI assistant: max 40 requests per 5 minutes per IP
export const aiLimiter = rateLimit({
  windowMs: 5 * 60 * 1000,
  max: 40,
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    success: false,
    message: 'AI query limit reached. Please wait a couple minutes before asking more questions.'
  }
});

// Rate limiter for admin login: max 10 attempts per 15 minutes
export const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 10,
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    success: false,
    message: 'Too many login attempts. Please wait 15 minutes before retrying.'
  }
});
