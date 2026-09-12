import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import { ContactMessage } from '../models/ContactMessage.js';
import { getDBStatus } from '../config/db.js';

const JWT_SECRET = process.env.JWT_SECRET || 'vivek-portfolio-super-secret-jwt-key-2026';
const ADMIN_USER = process.env.ADMIN_USER || 'admin';
const ADMIN_PASS = process.env.ADMIN_PASS || 'VivekAdmin2026!';

export const adminLogin = async (req, res, next) => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      return res.status(400).json({
        success: false,
        message: 'Username and password are required.'
      });
    }

    const isValidUser = username.trim() === ADMIN_USER;
    const isValidPass = password.trim() === ADMIN_PASS;

    if (!isValidUser || !isValidPass) {
      return res.status(401).json({
        success: false,
        message: 'Invalid administrative credentials.'
      });
    }

    const token = jwt.sign(
      {
        user: ADMIN_USER,
        role: 'administrator'
      },
      JWT_SECRET,
      { expiresIn: '7d' }
    );

    return res.status(200).json({
      success: true,
      message: 'Authentication successful.',
      token,
      user: {
        username: ADMIN_USER,
        role: 'administrator'
      }
    });
  } catch (error) {
    next(error);
  }
};

export const getMessages = async (req, res, next) => {
  try {
    const { status } = req.query;
    const query = status && status !== 'all' ? { status } : {};
    const messages = await ContactMessage.find(query);

    return res.status(200).json({
      success: true,
      count: messages.length,
      data: messages
    });
  } catch (error) {
    next(error);
  }
};

export const updateMessageStatus = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    const allowedStatuses = ['unread', 'read', 'replied', 'archived'];
    if (!allowedStatuses.includes(status)) {
      return res.status(400).json({
        success: false,
        message: `Invalid status. Allowed values: ${allowedStatuses.join(', ')}`
      });
    }

    const updated = await ContactMessage.findByIdAndUpdate(id, { status });

    if (!updated) {
      return res.status(404).json({
        success: false,
        message: 'Message not found.'
      });
    }

    return res.status(200).json({
      success: true,
      message: 'Status updated successfully.',
      data: updated
    });
  } catch (error) {
    next(error);
  }
};

export const deleteMessage = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deleted = await ContactMessage.findByIdAndDelete(id);

    if (!deleted) {
      return res.status(404).json({
        success: false,
        message: 'Message not found.'
      });
    }

    return res.status(200).json({
      success: true,
      message: 'Message deleted successfully.'
    });
  } catch (error) {
    next(error);
  }
};

export const getDashboardStats = async (req, res, next) => {
  try {
    const total = await ContactMessage.countDocuments();
    const unread = await ContactMessage.countDocuments({ status: 'unread' });
    const replied = await ContactMessage.countDocuments({ status: 'replied' });
    const dbStatus = getDBStatus();

    return res.status(200).json({
      success: true,
      data: {
        totalMessages: total,
        unreadMessages: unread,
        repliedMessages: replied,
        database: dbStatus,
        uptime: process.uptime(),
        environment: process.env.NODE_ENV || 'development'
      }
    });
  } catch (error) {
    next(error);
  }
};
