const mongoose = require("mongoose");

const candidateSchema = new mongoose.Schema({
  username: String,
  accessToken: String,
  refreshToken: String,
  emial: String,
  password: String,
  resume: {
    basics: {
      name: {
        type: String,
        required: true,
      },
      email: {
        type: String,
        required: true,
      },
      phone: {
        type: String,
      },
      summary: {
        type: String,
        default: "Connect with me through my social",
      },
      location: String,
      profiles: {
        type: Array,
        default: [],
        /*
              "network": "Twitter",
              "username": "john",
              "url": "http://twitter.com/john"
            */
      },
    },
    work: {
      type: Array,
      default: [],
      /*
            "company": "Company",
            "position": "President",
            "website": "http://company.com",
            "startDate": "2013-01-01",
            "endDate": "2014-01-01",
            "summary": "Description...",
            "highlights": ["Started the company"]
           */
    },
    education: {
      type: Array,
      default: [],
      /*
              "institution": "University",
              "area": "Software Development",
              "studyType": "Bachelor",
              "startDate": "2011-01-01",
              "endDate": "2013-01-01",
              "gpa": "4.0",
              "courses": [
                "DB1101 - Basic SQL"
              ]
          */
    },
    awards: {
      type: Array,
      default: [],
    },
    skills: {
      type: Array,
      default: [],
    },
    references: {
      type: Array,
      default: [],
    },
  },
  score: {
    type: Number,
    default: 0,
  },
  applications: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Application",
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Candidate", candidateSchema);
