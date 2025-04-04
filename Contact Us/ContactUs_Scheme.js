const mongoose = require("mongoose");

let contactUsSchema = mongoose.Schema({
  name: String,
  phone: String,
  email: String,
  message: String
});

module.exports = mongoose.model("contactus", contactUsSchema);
