const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema({
  company: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Company",
  },
  role: {
    type: String,
    required: true,
  },
  experience: {
    type: String,
    default: "0-1 years",
  },
  skills: {
    type: Array,
    default: [],
  },
  description: String,
  jobType: String,
  pay: Number,
  hiring: {
    type: Boolean,
    default: true,
  },
  applications: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Application",
    },
  ],
});

module.exports = mongoose.model("Job", jobSchema);
