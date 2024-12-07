const jwt = require('jsonwebtoken');

// Middleware to verify JWT
const verifyToken = (req, res, next) => {
    try {
        const authHeader = req.headers.authorization;

        if (!authHeader) {
            return res.status(401).json({ message: 'Access denied, no Authorization header provided' });
        }
        const token = authHeader.split(' ')[1];
        if (!token) {
            return res.status(401).json({ message: 'Access denied, token missing in Authorization header' });
        }
        const JWT_SECRET = process.env.JWT_SECRET; 
        if (!JWT_SECRET) {
            throw new Error('JWT_SECRET is not defined in the environment variables.');
        }

        const decoded = jwt.verify(token, JWT_SECRET);
        req.user = decoded; 
        next();
    } catch (error) {
        console.error('JWT verification error:', error.message);
        if (error.name === 'TokenExpiredError') {
            return res.status(401).json({ message: 'Token has expired' });
        } else if (error.name === 'JsonWebTokenError') {
            return res.status(401).json({ message: 'Invalid token' });
        }

        res.status(401).json({ message: 'Authentication failed' });
    }
};

module.exports = verifyToken;
