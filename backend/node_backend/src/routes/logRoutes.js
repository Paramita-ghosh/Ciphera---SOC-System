const router = require("express").Router();
const { createLog } = require("../controllers/logController");

router.post("/", createLog);

module.exports = router;
