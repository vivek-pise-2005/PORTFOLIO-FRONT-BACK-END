import { Router } from 'express';
import {
  adminLogin,
  getMessages,
  updateMessageStatus,
  deleteMessage,
  getDashboardStats
} from '../controllers/adminController.js';
import { requireAdminAuth } from '../middleware/authMiddleware.js';
import { authLimiter } from '../middleware/rateLimiter.js';

const router = Router();

// Public auth route
router.post('/login', authLimiter, adminLogin);

// Protected routes
router.get('/stats', requireAdminAuth, getDashboardStats);
router.get('/messages', requireAdminAuth, getMessages);
router.patch('/messages/:id/status', requireAdminAuth, updateMessageStatus);
router.delete('/messages/:id', requireAdminAuth, deleteMessage);

export default router;
