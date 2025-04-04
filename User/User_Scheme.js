const mongoose = require("mongoose");

let userSchema = mongoose.Schema({
  firstName: String,
  lastName: String,
  gender: String,
  phone: String,
  email: String,
  password: String
});

module.exports = mongoose.model("user", userSchema);
