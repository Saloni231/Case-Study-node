const mongoose = require("mongoose");

let aboutPageSchema = mongoose.Schema({
  aboutDescription: String,
  detailHeader: String,
  detail: String,
  detailURL: String,
  image: String,
});

module.exports = mongoose.model("AboutPage", aboutPageSchema);
