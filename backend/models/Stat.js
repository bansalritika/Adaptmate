const mongoose = require("mongoose");

const statSchema = new mongoose.Schema({
  syllabus: Number,
  learningObjective: Number,
  health: Number,
  awareness: Number
});

module.exports = mongoose.model("Stat", statSchema);
