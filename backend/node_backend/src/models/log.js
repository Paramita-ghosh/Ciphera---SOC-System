const mongoose = require("mongoose");

const LogSchema = new mongoose.Schema(
  {
    attackType: {
      type: String,
      enum: ["XSS", "SQLI", "PORT_SCAN", "FAILED_LOGIN", "BRUTE_FORCE"],
      required: true
    },

    sourceIP: {
      type: String,
      required: true
    },

    targetSystem: {
      type: String,
      required: true
    },

    severity: {
      type: String,
      enum: ["low", "medium", "high", "critical"],
      required: true
    },

    processed: {
      type: Boolean,
      default: false
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Log", LogSchema);

