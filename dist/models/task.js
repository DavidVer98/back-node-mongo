"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose"); // Import mongoose
const taskSchema = new mongoose_1.Schema({
    // Create a schema
    title: { type: String, required: true, trim: true },
    description: { type: String, required: true, trim: true },
    date: { type: Date },
    done: { type: Boolean, default: false },
}, { versionKey: false } // Disable version key
);
exports.default = (0, mongoose_1.model)("Task", taskSchema); // Export Task model
