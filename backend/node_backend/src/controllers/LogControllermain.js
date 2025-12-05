const Log = require("../models/log");
const Incident = require("../models/incident");
const analyzeLog = require("../utils/pythonEngine");

exports.generateLog = async (req, res) => {
  const attacks = ["XSS", "SQLI", "PORT_SCAN", "FAILED_LOGIN", "BRUTE_FORCE"];
  const systems = ["Core Grid", "Zordon Panel", "Command Vault"];
  const severities = ["low", "medium", "high", "critical"];

  const logData = {
    attackType: attacks[Math.floor(Math.random() * attacks.length)],
    sourceIP: `${Math.floor(Math.random() * 255)}.${Math.floor(
      Math.random() * 255
    )}.${Math.floor(Math.random() * 255)}.${Math.floor(
      Math.random() * 255
    )}`,
    targetSystem: systems[Math.floor(Math.random() * systems.length)],
    severity: severities[Math.floor(Math.random() * severities.length)],
  };

  // Save log in MongoDB
  const newLog = await Log.create(logData);

  // ---- CONVERSION LAYER ----
  const pythonLog = {
    attack_type: newLog.attackType,
    src_ip: newLog.sourceIP,
    target: newLog.targetSystem,
    severity: newLog.severity,
    ts: newLog.createdAt
  };

  // Call Python AI engine
  const engineResponse = await analyzeLog(pythonLog);

  // Auto-create incident if engine says so
  if (engineResponse.action === "create_incident") {
    await Incident.create({
      title: engineResponse.reason,
      severity: engineResponse.severity,
      src_ip: newLog.sourceIP,
      relatedLog: newLog._id,
      status: "open"
    });
  }

  res.json({
    log: newLog,
    engine: engineResponse
  });
};

// GET all logs
exports.getLogs = async (req, res) => {
  const logs = await Log.find().sort({ createdAt: -1 });
  res.json(logs);
};