const Analyst = require("../models/Analyst");

// CREATE analyst (Admin)
exports.createAnalyst = async (req, res) => {
  const { name, email, password } = req.body;

  const exists = await Analyst.findOne({ email });
  if (exists) return res.status(400).json({ message: "Analyst exists" });

  const hashed = await bcrypt.hash(password, 10);

  const analyst = await Analyst.create({
    name,
    email,
    password: hashed,
  });

  res.status(201).json(analyst);
};

// GET all analysts
exports.getAnalysts = async (req, res) => {
  const analysts = await Analyst.find().select("-password");
  res.json(analysts);
};

// DELETE analyst
exports.deleteAnalyst = async (req, res) => {
  await Analyst.findByIdAndDelete(req.params.id);
  res.json({ message: "Analyst removed" });
};
