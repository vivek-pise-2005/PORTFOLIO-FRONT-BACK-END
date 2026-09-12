import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'vivek-portfolio-super-secret-jwt-key-2026';

export const requireAdminAuth = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({
      success: false,
      message: 'Access denied. No valid authentication token provided.'
    });
  }

  const token = authHeader.split(' ')[1];

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.admin = decoded;
    next();
  } catch {
    return res.status(403).json({
      success: false,
      message: 'Invalid or expired session token. Please log in again.'
    });
  }
};
