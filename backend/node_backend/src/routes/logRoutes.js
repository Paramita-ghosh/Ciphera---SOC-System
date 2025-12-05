const router = require("express").Router();
const { generateLog, getLogs } = require("../controllers/LogControllermain");
const { protect } = require("../middlewares/authMiddleware");
const { authorizeRoles } = require("../middlewares/roleMiddleware");

// Auto-generate random logs (ADMIN ONLY)
router.post("/generate", protect, authorizeRoles("admin"), generateLog);

// Get all logs (Admin + Analyst)
router.get("/", protect, getLogs);

module.exports = router;


