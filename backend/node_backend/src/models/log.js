const mongoose = require("mongoose");

const logSchema = new mongoose.Schema({
  ts: { type: Date, default: Date.now },
  attack_type: String,
  src_ip: String,
  target: String,
  payload: Object,
  severity: String
});

logSchema.index({ ts: -1 });
logSchema.index({ src_ip: 1 });
logSchema.index({ attack_type: 1 });

module.exports = mongoose.model("Log", logSchema);
