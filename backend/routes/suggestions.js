const express = require("express");
const router = express.Router();
const Suggestion = require("../models/Suggestion");

router.get("/", async (req, res) => {
  const suggestion = await Suggestion.findOne();
  res.json(suggestion);
});

module.exports = router;
