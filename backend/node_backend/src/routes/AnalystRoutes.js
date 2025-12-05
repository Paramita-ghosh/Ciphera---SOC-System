const router = require("express").Router();
const {
  createAnalyst,
  getAnalysts,
  deleteAnalyst
} = require("../controllers/analystController");

const { protect } = require("../middleware/authMiddleware");
const { authorizeRoles } = require("../middleware/roleMiddleware");

// Create analyst (Admin only)
router.post("/", protect, authorizeRoles("admin"), createAnalyst);

// Get all analysts (Admin only)
router.get("/", protect, authorizeRoles("admin"), getAnalysts);

// Delete analyst (Admin only)
router.delete("/:id", protect, authorizeRoles("admin"), deleteAnalyst);

module.exports = router;
