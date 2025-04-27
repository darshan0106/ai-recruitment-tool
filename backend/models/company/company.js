const mongoose = require("mongoose");

const companySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  website: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  size: Number,
  description: String,
  jobLisitings: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Job",
    },
  ],
  location: {
    address: String,
    country: String,
    city: String,
    area: String,
    postalCode: String,
  },
  contact: Number,
});

module.exports = mongoose.model("Company", companySchema);
