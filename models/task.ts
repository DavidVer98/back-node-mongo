import { Schema, model } from "mongoose"; // Import mongoose

const taskSchema = new Schema(
  {
    // Create a schema
    title: { type: String, required: true, trim: true },
    description: { type: String, required: true, trim: true },
    date: { type: Date},
    done: { type: Boolean, default: false },
  },
  { versionKey: false } // Disable version key
);

export default model("Task", taskSchema); // Export Task model
