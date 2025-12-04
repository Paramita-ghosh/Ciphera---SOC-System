const router = require("express").Router();
const { getAllIncidents } = require("../controllers/incidentController");

router.get("/", getAllIncidents);

module.exports = router;
