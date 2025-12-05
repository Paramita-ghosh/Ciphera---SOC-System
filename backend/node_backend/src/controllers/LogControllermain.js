const Log = require("../models/log");

// AUTO-GENERATE log
exports.generateLog = async (req, res) => {
  const attacks = ["XSS", "SQLI", "PORT_SCAN", "FAILED_LOGIN", "BRUTE_FORCE"];
  const systems = ["Core Grid", "Zordon Panel", "Command Vault"];
  const severities = ["low", "medium", "high", "critical"];

  const log = await Log.create({
    attackType: attacks[Math.floor(Math.random() * attacks.length)],
    sourceIP: `${Math.floor(Math.random() * 255)}.${Math.floor(
      Math.random() * 255
    )}.${Math.floor(Math.random() * 255)}.${Math.floor(
      Math.random() * 255
    )}`,
    targetSystem: systems[Math.floor(Math.random() * systems.length)],
    severity: severities[Math.floor(Math.random() * severities.length)],
  });

  res.json(log);
};

// GET all logs
exports.getLogs = async (req, res) => {
  const logs = await Log.find().sort({ createdAt: -1 });
  res.json(logs);
};
