import { queryAIAssistant } from '../services/aiGroundedService.js';

export const handleAIChat = async (req, res, next) => {
  try {
    const { message } = req.body;

    if (!message || typeof message !== 'string' || message.trim().length === 0) {
      return res.status(400).json({
        success: false,
        message: 'A message string is required.'
      });
    }

    if (message.length > 500) {
      return res.status(400).json({
        success: false,
        message: 'Message is too long. Please keep questions under 500 characters.'
      });
    }

    const { reply, source } = await queryAIAssistant(message.trim());

    return res.status(200).json({
      success: true,
      reply,
      meta: {
        source,
        timestamp: new Date().toISOString()
      }
    });
  } catch (error) {
    next(error);
  }
};
