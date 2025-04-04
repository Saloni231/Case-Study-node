const mongoose = require("mongoose");
let homeSchema = mongoose.Schema({
  text: String,
  description: String,
  image: String,
});

module.exports = mongoose.model("HomePage", homeSchema);
