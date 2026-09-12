import mongoose from 'mongoose';
import { getDBStatus } from '../config/db.js';

// MongoDB Schema
const contactMessageSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Name is required'],
      trim: true,
      maxlength: [100, 'Name cannot exceed 100 characters']
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      trim: true,
      lowercase: true,
      match: [/^\S+@\S+\.\S+$/, 'Please provide a valid email address']
    },
    subject: {
      type: String,
      required: [true, 'Subject is required'],
      trim: true,
      maxlength: [150, 'Subject cannot exceed 150 characters']
    },
    message: {
      type: String,
      required: [true, 'Message content is required'],
      trim: true,
      maxlength: [5000, 'Message cannot exceed 5000 characters']
    },
    status: {
      type: String,
      enum: ['unread', 'read', 'replied', 'archived'],
      default: 'unread'
    },
    ipAddress: {
      type: String,
      default: 'unknown'
    },
    userAgent: {
      type: String,
      default: 'unknown'
    }
  },
  {
    timestamps: true
  }
);

let MongoContactMessage;
try {
  MongoContactMessage = mongoose.model('ContactMessage', contactMessageSchema);
} catch {
  MongoContactMessage = mongoose.models.ContactMessage;
}

// In-memory fallback repository with initial sample message
const inMemoryMessages = [
  {
    _id: 'msg_demo_01',
    name: 'Sarah Chen (Tech Recruiter)',
    email: 'sarah.chen@techcareers.ai',
    subject: 'Data Science / Software Engineering Internship Inquiry',
    message:
      'Hi Vivek, I reviewed your profile and projects (SQL-LEARNING-REPO and your AWS experience). Your strong ENTC foundation (8.45 SGPA) and hands-on Python/SQL skills are a great match for our engineering team. Let us connect!',
    status: 'unread',
    ipAddress: '127.0.0.1',
    userAgent: 'Mozilla/5.0 RecruitClient',
    createdAt: new Date(Date.now() - 3600000 * 4),
    updatedAt: new Date(Date.now() - 3600000 * 4)
  }
];

export const ContactMessage = {
  create: async (data) => {
    if (getDBStatus().connected && MongoContactMessage) {
      return await MongoContactMessage.create(data);
    }
    const newMessage = {
      _id: 'msg_' + Date.now() + '_' + Math.random().toString(36).substring(2, 7),
      ...data,
      status: data.status || 'unread',
      createdAt: new Date(),
      updatedAt: new Date()
    };
    inMemoryMessages.unshift(newMessage);
    return newMessage;
  },

  find: async (query = {}) => {
    if (getDBStatus().connected && MongoContactMessage) {
      return await MongoContactMessage.find(query).sort({ createdAt: -1 });
    }
    let results = [...inMemoryMessages];
    if (query.status) {
      results = results.filter((m) => m.status === query.status);
    }
    return results.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  },

  findById: async (id) => {
    if (getDBStatus().connected && MongoContactMessage) {
      return await MongoContactMessage.findById(id);
    }
    return inMemoryMessages.find((m) => m._id === id || m.id === id) || null;
  },

  findByIdAndUpdate: async (id, updates) => {
    if (getDBStatus().connected && MongoContactMessage) {
      return await MongoContactMessage.findByIdAndUpdate(id, updates, { new: true });
    }
    const idx = inMemoryMessages.findIndex((m) => m._id === id || m.id === id);
    if (idx === -1) return null;
    inMemoryMessages[idx] = {
      ...inMemoryMessages[idx],
      ...updates,
      updatedAt: new Date()
    };
    return inMemoryMessages[idx];
  },

  findByIdAndDelete: async (id) => {
    if (getDBStatus().connected && MongoContactMessage) {
      return await MongoContactMessage.findByIdAndDelete(id);
    }
    const idx = inMemoryMessages.findIndex((m) => m._id === id || m.id === id);
    if (idx === -1) return null;
    const deleted = inMemoryMessages.splice(idx, 1);
    return deleted[0];
  },

  countDocuments: async (query = {}) => {
    if (getDBStatus().connected && MongoContactMessage) {
      return await MongoContactMessage.countDocuments(query);
    }
    if (query.status) {
      return inMemoryMessages.filter((m) => m.status === query.status).length;
    }
    return inMemoryMessages.length;
  }
};
