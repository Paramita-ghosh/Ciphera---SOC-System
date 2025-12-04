const mongoose = require("mongoose");

const incidentSchema = new mongoose.Schema({
  created_at: { type: Date, default: Date.now },
  severity: String,
  description: String,
  status: { type: String, default: "Open" },
  related_logs: [String]
});

module.exports = mongoose.model("Incident", incidentSchema);
