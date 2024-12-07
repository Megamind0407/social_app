const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const UserSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: [true, 'Username is required'],
            unique: true,
            trim: true,
        },
        email: {
            type: String,
            required: [true, 'Email is required'],
            unique: true,
            lowercase: true, // Automatically convert email to lowercase
            match: [/\S+@\S+\.\S+/, 'Please provide a valid email address'],
        },
        password: {
            type: String,
            required: [true, 'Password is required'],
            minlength: [6, 'Password must be at least 6 characters'],
        },
        hobbies: {
            type: [String],
            default: [],
        },
    },
    {
        timestamps: true, // Automatically add createdAt and updatedAt fields
    }
);

// Hash password before saving
UserSchema.pre('save', async function (next) {
    // Only hash the password if it has been modified
    if (!this.isModified('password')) return next();

    try {
        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password, salt);
        next();
    } catch (err) {
        return next(err); // Pass error to the next middleware
    }
});

// Method to compare passwords
UserSchema.methods.comparePassword = async function (candidatePassword) {
    try {
        return await bcrypt.compare(candidatePassword, this.password);
    } catch (err) {
        throw new Error('Error comparing passwords'); // Throw specific error for debugging
    }
};

module.exports = mongoose.model('User', UserSchema);
