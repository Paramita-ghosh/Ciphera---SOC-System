const express = require("express");
const cors = require("cors");

const logRoutes = require("./routes/logRoutes");
const incidentRoutes = require("./routes/incidentRoutes");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/logs", logRoutes);
app.use("/incidents", incidentRoutes);

module.exports = app;
