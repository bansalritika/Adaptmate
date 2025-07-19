const express = require("express");
const router = express.Router();
const Performance = require("../models/Performance");

router.get("/", async (req, res) => {
  const data = await Performance.find();
  res.json(data);
});

module.exports = router;
