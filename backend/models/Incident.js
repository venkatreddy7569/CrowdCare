const mongoose = require("mongoose");

const incidentSchema = new mongoose.Schema({
  type: { type: String, required: true }, // medical, fire, crime, etc.
  description: { type: String, required: true },
  location: {
    lat: { type: Number, required: true },
    lng: { type: Number, required: true }
  },
  reporter: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  status: { type: String, default: "pending" }, // pending, resolved
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Incident", incidentSchema);
