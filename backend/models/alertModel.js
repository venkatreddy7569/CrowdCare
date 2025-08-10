import mongoose from "mongoose";

const alertSchema = new mongoose.Schema({
  title: { type: String, required: true },
  location: { type: String, required: true },
  time: { type: String, required: true },
  description: { type: String, required: true },
}, { timestamps: true });

export default mongoose.model("Alert", alertSchema);
