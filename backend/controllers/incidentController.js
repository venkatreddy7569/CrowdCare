const Incident = require("../models/Incident");

const getIncidents = async (req, res) => {
  const incidents = await Incident.find().populate("reporter", "name email").sort({ createdAt: -1 });
  res.json(incidents);
};

const createIncident = async (req, res) => {
  const { type, description, location } = req.body;

  if (!type || !description || !location) {
    return res.status(400).json({ message: "Please provide all fields" });
  }

  const incident = await Incident.create({
    type,
    description,
    location,
    reporter: req.user._id
  });

  res.status(201).json(incident);
};

module.exports = { getIncidents, createIncident };
