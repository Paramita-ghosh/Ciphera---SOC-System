const axios = require("axios");

module.exports = async function analyzeLog(log) {
  try {
    const res = await axios.post(process.env.PYTHON_ENGINE_URL, log);
    return res.data;  // { action: "create_incident", severity, reason }
  } catch (err) {
    console.error("Python Engine Error:", err.message);
    return null;
  }
};
