import express from "express";
import Alert from "../models/alertModel.js";

const router = express.Router();

// Get all alerts
router.get("/", async (req, res) => {
  try {
    const alerts = await Alert.find().sort({ createdAt: -1 });
    res.json(alerts);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Add a new alert
router.post("/", async (req, res) => {
  try {
    const { title, location, time, description } = req.body;
    const alert = new Alert({ title, location, time, description });
    await alert.save();
    res.status(201).json(alert);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

export default router;
