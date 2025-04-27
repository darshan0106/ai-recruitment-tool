const Recruiter = require("../../models/recruiter/recuiter");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.registerRecruiter = async (req, res) => {
  try {
    const { name, email, password, companyId } = req.body;
    const existing = await Recruiter.findOne({ email });
    if (existing)
      return res.status(400).json({ message: "Recruiter already exists" });

    const hashedPassword = await bcrypt.hash(password, 10);

    const newRecruiter = new Recruiter({
      name,
      email,
      password: hashedPassword,
      company: companyId || null,
    });

    await newRecruiter.save();
    res.status(201).json({ message: "Recruiter registered successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error registering recruiter", error });
  }
};

exports.loginRecruiter = async (req, res) => {
  try {
    const { email, password } = req.body;
    const recruiter = await Recruiter.findOne({ email }).populate("company");
    if (!recruiter)
      return res.status(404).json({ message: "Recruiter not found" });

    const isMatch = await bcrypt.compare(password, recruiter.password);
    if (!isMatch)
      return res.status(401).json({ message: "Invalid credentials" });

    const token = jwt.sign({ id: recruiter._id }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });
    res
      .status(200)
      .json({ message: "Login successful", token, user: recruiter });
  } catch (error) {
    res.status(500).json({ message: "Login error", error });
  }
};
