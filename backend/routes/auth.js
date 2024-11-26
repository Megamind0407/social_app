// routes/authRoutes.js
const express = require('express');
const bcrypt = require('bcrypt');
const User = require('../models/UserModel'); // Import the User model
const router = express.Router();

// Sign Up Route
router.post('/signup', async (req, res) => {
    const { username, email, password, confirmPassword, hobbies } = req.body;

    // Check if the user already exists
    const existingUser = await User.findOne({ $or: [{ email }, { username }] });
    if (existingUser) {
        return res.status(400).json({ message: 'Username or email already exists' });
    }

    try {
        // Hash the password before saving to the database
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new User({
            username,
            email,
            password: hashedPassword,
            confirmPassword: hashedPassword, // Save the hashed password in confirmPassword as well
            hobbies,
        });

        // Save the new user to the database
        await user.save();

        // Send success response
        res.status(201).json({ message: 'User created successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error, please try again later' });
    }
});

module.exports = router;
