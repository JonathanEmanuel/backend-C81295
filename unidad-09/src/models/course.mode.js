import mongoose from "mongoose";

const collection = 'courses';

const courseSchema = new mongoose.Schema({
    title: {
        type: String,
        unique: true,
        required: true
    },
    foto: String,
    description: {
        type: String
    }
});

export const courseModel = mongoose.model(collection, courseSchema);