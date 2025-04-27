const mongoose = require("mongoose");

const applicationSchema = new mongoose.Schema({
  for: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Job",
  },
  by: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Candidate",
  },
  selected: {
    type: String,
    enum: ["under review", "selected", "rejected"],
    default: "under review",
  },
});

module.exports = mongoose.model("Application", applicationSchema);
