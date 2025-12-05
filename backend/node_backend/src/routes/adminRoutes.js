const router = require("express").Router();
const { login, register } = require("../controllers/authController");

// Register user (Admin or Analyst)
router.post("/register", register);

// Login user (Admin or Analyst)
router.post("/login", login);

module.exports = router;
