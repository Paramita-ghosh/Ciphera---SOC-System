const express = require("express");
const app = express();
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

app.listen(5000, () => console.log("MicroSOC running on port 5000"));

