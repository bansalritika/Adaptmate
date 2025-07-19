const mongoose = require("mongoose");

const performanceSchema = new mongoose.Schema({
  month: String,
  top: Number,
  avg: Number,
  low: Number
});

module.exports = mongoose.model("Performance", performanceSchema);
