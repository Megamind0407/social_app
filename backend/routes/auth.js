const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/UserModel');
const router = express.Router();

const JWT_SECRET = process.env.JWT_SECRET;
if (!JWT_SECRET) {
    throw new Error('Missing JWT_SECRET in environment variables');
}

// Sign Up Route
router.post('/signup', async (req, res) => {
    const { username, email, password, hobbies } = req.body;

    try {
        // Validate required fields
        if (!username || !email || !password) {
            return res.status(400).json({ message: 'All fields are required' });
        }

        // Normalize email to lowercase
        const normalizedEmail = email.toLowerCase();

        // Check if user already exists
        const existingUser = await User.findOne({ $or: [{ email: normalizedEmail }, { username }] });
        if (existingUser) {
            return res.status(400).json({ message: 'Username or email already exists' });
        }
        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create and save the new user
        const user = new User({
            username,
            email: normalizedEmail,
            password: hashedPassword,
            hobbies,
        });

        const savedUser = await user.save();
        res.status(201).json({ message: 'User created successfully', user: savedUser });
    } catch (error) {
        console.error('Error during signup:', error);
        res.status(500).json({ message: 'Server error, please try again later' });
    }
});

// Sign In Route
router.post('/signin', async (req, res) => {
    const { email, password } = req.body;

    try {
        if (!email || !password) {
            return res.status(400).json({ message: 'All fields are required' });
        }
        console.log("Sign-in attempt for email:", email);
        const user = await User.findOne({ email });
        if (!user) {
            console.error(`No user found with email: ${email}`);
            return res.status(400).json({ message: 'Invalid email or password' });
        }

        console.log("User found:", user);
        const isPasswordValid = await bcrypt.compare(password, user.password);
        console.log("Password comparison result:", isPasswordValid);
        if (!isPasswordValid) {
            console.error("Password mismatch for user:", email);
            return res.status(400).json({ message: 'Invalid email or password' });
        }

        console.log("Password matched successfully for user:", email);
        const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: '1h' });

        console.log("Sign-in successful for user:", email);

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
        console.error("Error during sign-in:", error);
        res.status(500).json({ message: 'Server error, please try again later' });
    }
});

module.exports = router;
