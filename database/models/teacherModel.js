import mongoose from "mongoose";
import { Schema } from "mongoose";


const teacherSchema = {
  name: {
    type: String,
    required: true,
    trim: true,
    unique: true,
    validate: {
      validator: function (value) {
        return /^[a-zA-Z\s]+$/.test(value);
      },
      message: "Name can only contain letters and spaces.",
    },
  },
  gradeLevel: {
    type: Number,
    required: true,
    min: 1,
    max: 12,
  },
};
export default mongoose.models.Teacher ||
  mongoose.model("Teacher", new Schema(teacherSchema, { timestamps: true }));
  