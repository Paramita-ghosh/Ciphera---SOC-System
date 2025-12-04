const Log = require("../models/log");
const Incident = require("../models/incident");
const analyzeLog = require("../services/pythonBridge");

module.exports.createLog = async (req, res) => {
  // store log
  const log = await Log.create(req.body);

  // send to python rule engine
  const result = await analyzeLog(log);

  // python says create an incident
  if (result && result.action === "create_incident") {
    await Incident.create({
      severity: result.severity,
      description: result.reason,
      related_logs: [log._id]
    });
  }

  res.json({ msg: "Log processed", log });
};
