const Candidate = require("../../models/candidate/candidate");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.registerCandidate = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const existing = await Candidate.findOne({ email });
    if (existing)
      return res.status(400).json({ message: "Candidate already exists" });

    const hashedPassword = await bcrypt.hash(password, 10);

    const newCandidate = new Candidate({
      username,
      email,
      password: hashedPassword,
    });

    await newCandidate.save();
    res.status(201).json({ message: "Candidate registered successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error registering candidate", error });
  }
};

exports.loginCandidate = async (req, res) => {
  try {
    const { email, password } = req.body;
    const candidate = await Candidate.findOne({ email });
    if (!candidate)
      return res.status(404).json({ message: "Candidate not found" });

    const isMatch = await bcrypt.compare(password, candidate.password);
    if (!isMatch)
      return res.status(401).json({ message: "Invalid credentials" });

    const token = jwt.sign({ id: candidate._id }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });
    res
      .status(200)
      .json({ message: "Login successful", token, user: candidate });
  } catch (error) {
    res.status(500).json({ message: "Login error", error });
  }
};
