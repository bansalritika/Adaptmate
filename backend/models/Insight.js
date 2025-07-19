const mongoose = require("mongoose");

const insightSchema = new mongoose.Schema({
  percentHigh: Number,
  percentMid: Number,
  percentLow: Number,
  keyPoints: [String],
  recommendations: String
});

module.exports = mongoose.model("Insight", insightSchema);
