const mongoose = require("mongoose");

const IncidentSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true
    },

    description: {
      type: String,
      required: true
    },

    severity: {
      type: String,
      enum: ["low", "medium", "high", "critical"],
      required: true
    },

    status: {
      type: String,
      enum: ["open", "in_progress", "resolved"],
      default: "open"
    },

    relatedLog: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Log"
    },

    assignedTo: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Analyst",
      default: null
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Incident", IncidentSchema);

