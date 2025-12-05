const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Admin = require("../models/Admin");
const Analyst = require("../models/Analyst");

// Generate token
const generateToken = (id, role) => {
  return jwt.sign({ id, role }, process.env.JWT_SECRET, { expiresIn: "7d" });
};

// REGISTER USER (admin or analyst)
exports.register = async (req, res) => {
  try {
    const { role, name, email, password } = req.body;

    if (!["admin", "analyst"].includes(role)) {
      return res.status(400).json({ message: "Invalid role" });
    }

    const Model = role === "admin" ? Admin : Analyst;

    const exists = await Model.findOne({ email });
    if (exists) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashed = await bcrypt.hash(password, 10);

    const user = await Model.create({
      name,
      email,
      password: hashed,
      role,
    });

    res.status(201).json({
      id: user._id,
      role: user.role,
      token: generateToken(user._id, user.role),
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// LOGIN
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    let user =
      (await Admin.findOne({ email })) ||
      (await Analyst.findOne({ email }));

    if (!user) return res.status(400).json({ message: "Invalid credentials" });

    const match = await bcrypt.compare(password, user.password);
    if (!match)
      return res.status(400).json({ message: "Invalid credentials" });

    res.json({
      id: user._id,
      role: user.role,
      name: user.name,
      token: generateToken(user._id, user.role),
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// PROFILE
exports.profile = async (req, res) => {
  res.json(req.user);
};
