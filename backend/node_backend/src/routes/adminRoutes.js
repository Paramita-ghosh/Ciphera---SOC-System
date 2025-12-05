const router = require("express").Router();
const { loginAdmin, loginAnalyst } = require("../controllers/authController");

// Admin login
router.post("/login/admin", loginAdmin);

// Analyst login
router.post("/login/analyst", loginAnalyst);

module.exports = router;
