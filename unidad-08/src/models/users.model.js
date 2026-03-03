import mongoose from "mongoose";

const userCollection = 'users';

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    foto: String,
    email: {
        type: String,
        required: true, 
        unique: true
    },
    created: {
        type: Date,
        default: Date.now
    }
});

export const userModel = mongoose.model(userCollection, userSchema);