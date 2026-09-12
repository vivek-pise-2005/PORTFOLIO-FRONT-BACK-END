import { Router } from 'express';
import { handleAIChat } from '../controllers/aiController.js';
import { aiLimiter } from '../middleware/rateLimiter.js';

const router = Router();

router.post('/chat', aiLimiter, handleAIChat);

export default router;
