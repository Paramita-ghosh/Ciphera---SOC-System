const router = require("express").Router();
const {
  createIncident,
  assignIncident,
  getAllIncidents,
  myIncidents,
  updateIncident
} = require("../controllers/incidentController");

const { protect } = require("../middleware/authMiddleware");
const { authorizeRoles } = require("../middleware/roleMiddleware");

// Create incident manually (Admin only)
router.post("/", protect, authorizeRoles("admin"), createIncident);

// Assign incident (Admin only)
router.put("/assign", protect, authorizeRoles("admin"), assignIncident);

// Admin: Get all incidents
router.get("/all", protect, authorizeRoles("admin"), getAllIncidents);

// Analyst: Get my assigned incidents
router.get("/my", protect, authorizeRoles("analyst"), myIncidents);

// Update incident state (both roles allowed)
router.put("/:id", protect, updateIncident);

module.exports = router;

