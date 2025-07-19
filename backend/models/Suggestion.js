const mongoose = require("mongoose");

const suggestionSchema = new mongoose.Schema({
  title: String,
  date: String,
  desc: String
});

module.exports = mongoose.model("Suggestion", suggestionSchema);
