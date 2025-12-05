const Incident = require("../models/incident");
const Analyst = require("../models/Analyst");

// CREATE incident manually
exports.createIncident = async (req, res) => {
  const incident = await Incident.create(req.body);
  res.status(201).json(incident);
};

// ASSIGN incident to analyst (ADMIN only)
exports.assignIncident = async (req, res) => {
  const { incidentId, analystId } = req.body;

  const analyst = await Analyst.findById(analystId);
  if (!analyst) return res.status(404).json({ message: "Analyst not found" });

  const incident = await Incident.findByIdAndUpdate(
    incidentId,
    { assignedTo: analystId, status: "in_progress" },
    { new: true }
  );

  analyst.incidents.push(incident._id);
  await analyst.save();

  res.json(incident);
};

// GET all incidents (Admin)
exports.getAllIncidents = async (req, res) => {
  const i = await Incident.find().populate("assignedTo", "name email");
  res.json(i);
};

// ANALYST: GET my incidents
exports.myIncidents = async (req, res) => {
  const i = await Incident.find({ assignedTo: req.user._id });
  res.json(i);
};

// UPDATE incident state
exports.updateIncident = async (req, res) => {
  const { id } = req.params;
  const incident = await Incident.findByIdAndUpdate(id, req.body, {
    new: true,
  });
  res.json(incident);
};
