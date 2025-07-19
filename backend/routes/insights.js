const express = require("express");
const router = express.Router();
const Insight = require("../models/Insight");

router.get("/", async (req, res) => {
  const insight = await Insight.findOne();
  res.json(insight);
});

module.exports = router;
