const mongoose = require("mongoose");

const AnalystSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },

    email: { type: String, required: true, unique: true },

    password: { type: String, required: true },

    role: { type: String, default: "analyst" },

    profileImageUrl: { type: String, default: null },

    incidents: [
      { type: mongoose.Schema.Types.ObjectId, ref: "Incident" }
    ]
  },
  { timestamps: true }
);

module.exports = mongoose.model("Analyst", AnalystSchema);
