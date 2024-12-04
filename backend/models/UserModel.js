const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const UserSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true, // Ensure the username is unique
            trim: true,   // Remove extra spaces
        },
        email: {
            type: String,
            required: true,
            unique: true, // Ensure the email is unique
            lowercase: true,  // Automatically convert email to lowercase
            match: [/\S+@\S+\.\S+/, 'Please provide a valid email address'], // Email regex validation
        },
        password: {
            type: String,
            required: true,
        },
        hobbies: {
            type: [String], // An array of strings to store multiple hobbies
            default: [],    // Default to an empty array if not provided
        },
    },
    {
        timestamps: true, // Automatically add createdAt and updatedAt fields
    }
);

// Hash password before saving
UserSchema.pre('save', async function (next) {
    if (!this.isModified('password')) return next(); // Only hash if password is modified
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
});

// Method to compare passwords (useful for sign-in)
UserSchema.methods.comparePassword = async function (candidatePassword) {
    return await bcrypt.compare(candidatePassword, this.password);
};

module.exports = mongoose.model('User', UserSchema);
