const router = require("express").Router();
const { generateLog, getLogs } = require("../controllers/logController");
const { protect } = require("../middleware/authMiddleware");
const { authorizeRoles } = require("../middleware/roleMiddleware");

// Auto-generate random logs (ADMIN ONLY)
router.post("/generate", protect, authorizeRoles("admin"), generateLog);

// Get all logs (Admin + Analyst)
router.get("/", protect, getLogs);

module.exports = router;


