const express = require("express");
const router = express.Router();
const Incident = require("../models/incident");
const User = require("../models/user");

// @route POST /api/incidents/report
router.post("/report", async (req, res) => {
  try {
    const { userId, type, description, lat, lng } = req.body;

    if (!userId || !type || !lat || !lng) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ message: "User not found" });

    const incident = await Incident.create({
      user: userId,
      type,
      description,
      location: { lat, lng },
    });

    res.status(201).json({ message: "Incident reported successfully", incident });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

// @route GET /api/incidents/nearby
router.get("/nearby", async (req, res) => {
  try {
    const { lat, lng, radius } = req.query;
    if (!lat || !lng) {
      return res.status(400).json({ message: "Location is required" });
    }

    const distanceInKm = radius || 5;

    const incidents = await Incident.find({
      "location.lat": { $gte: parseFloat(lat) - 0.1, $lte: parseFloat(lat) + 0.1 },
      "location.lng": { $gte: parseFloat(lng) - 0.1, $lte: parseFloat(lng) + 0.1 },
    });

    res.json(incidents);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
