// utils/pythonEngine.js
const axios = require("axios");

module.exports = async function analyzeLog(log) {
  try {
    const res = await axios.post("http://localhost:5001/check", log);
    return res.data;  
  } catch (err) {
    console.error("Python Engine Error:", err.message);
    return { action: "none" };
  }
};
