const Incident = require("../models/incident");

module.exports.getAllIncidents = async (req, res) => {
  const data = await Incident.find().sort({ created_at: -1 });
  res.json(data);
};
