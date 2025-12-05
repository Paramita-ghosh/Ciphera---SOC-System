// app.js (exports app, does NOT start server)
const express = require("express");
const cors = require("cors");

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Route imports
const logRoutes = require("./routes/logRoutes");
const incidentRoutes = require("./routes/incidentRoutes");
const analystRoutes = require("./routes/AnalystRoutes");
const adminRoutes = require("./routes/adminRoutes");

// Routes
app.use("/api/logs", logRoutes);
app.use("/api/incidents", incidentRoutes);
app.use("/api/analysts", analystRoutes);
app.use("/api/auth", adminRoutes);

module.exports = app;
