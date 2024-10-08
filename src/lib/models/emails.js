import mongoose from 'mongoose';
import validator from 'validator';

const emailSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, "Please enter an email"],
        unique: true,
        lowercase: true,
        validate: [validator.isEmail, "Please enter a valid email"],
    },
});

// Check if the model is already defined to avoid overwriting it
const Email = mongoose.models.Email || mongoose.model('Email', emailSchema);

export default Email;
