const express = require("express");
const router = express.Router();
const {
  registerCandidate,
  loginCandidate,
} = require("../../controllers/candidate/candidateController");

router.post("/register", registerCandidate);
router.post("/login", loginCandidate);

module.exports = router;
