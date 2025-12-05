const jwt = require("jsonwebtoken");
const Admin = require("../models/Admin");
const Analyst = require("../models/Analyst");

exports.protect = async (req, res, next) => {
  let token = req.headers.authorization;

  if (!token || !token.startsWith("Bearer")) {
    return res.status(401).json({ message: "No token provided" });
  }

  token = token.split(" ")[1];
  const decoded = jwt.verify(token, process.env.JWT_SECRET);

  const user =
    (await Admin.findById(decoded.id)) ||
    (await Analyst.findById(decoded.id));

  if (!user) return res.status(401).json({ message: "User not found" });

  req.user = user;
  next();
};
