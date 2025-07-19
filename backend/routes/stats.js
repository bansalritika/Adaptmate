const express = require("express");
const router = express.Router();
const Stat = require("../models/Stat");

router.get("/", async (req, res) => {
  const stat = await Stat.findOne();
  res.json(stat);
});

module.exports = router;
