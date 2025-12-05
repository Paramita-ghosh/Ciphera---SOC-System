const jwt = require("jsonwebtoken");
const Analyst = require("../models/Analyst");
const Admin = require("../models/Admin");

const protect = async (req, res, next) => {
  try {
    let token = req.headers.authorization;

    if (!token || !token.startsWith("Bearer")) {
      return res.status(401).json({ message: "Not authorized, no token" });
    }

    token = token.split(" ")[1];

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Check both Admin and Analyst models
    let user =
      (await Admin.findById(decoded.id).select("-password")) ||
      (await Analyst.findById(decoded.id).select("-password"));

    if (!user) {
      return res.status(401).json({ message: "User does not exist" });
    }

    req.user = user;
    next();
  } catch (error) {
    res.status(401).json({ message: "Token failed", error: error.message });
  }
};

module.exports = { protect };