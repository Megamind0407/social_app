const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/UserModel');
const router = express.Router();

// Ensure the secret is loaded
const JWT_SECRET = process.env.JWT_SECRET;
if (!JWT_SECRET) {
    throw new Error('Missing JWT_SECRET in environment variables');
}

// Sign Up Route
router.post('/signup', async (req, res) => {
    const { username, email, password,hobbies } = req.body;

    try {
        // Check if the user already exists
        const existingUser = await User.findOne({ $or: [{ email }, { username }] });
        if (existingUser) {
            return res.status(400).json({ message: 'Username or email already exists' });
        }

        // Hash the password before saving
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new User({
            username,
            email,
            password: hashedPassword,
            hobbies,
        });

        // Save the new user
        const savedUser = await user.save();

        res.status(201).json({ message: 'User created successfully', user: savedUser });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error, please try again later' });
    }
});

// Sign In Route
router.post('/signin', async (req, res) => {
    const { email, password } = req.body;

    try {
        // Check if the user exists
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: 'Invalid email or password' });
        }

        // Compare the entered password
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(400).json({ message: 'Invalid email or password' });
        }

        // Generate a JWT token
        const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: '1h' });

        res.status(200).json({ 
            message: 'Sign in successful', 
            token, 
            user: {
                id: user._id,
                username: user.username,
                email: user.email,
                hobbies: user.hobbies,
            },
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error, please try again later' });
    }
});

// Logout Route (Optional: Token Invalidation)
router.post('/logout', (req, res) => {
    try {
        res.status(200).json({ message: 'Logged out successfully' });
        // Implement token invalidation logic (e.g., a blacklist)
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
});

module.exports = router;
