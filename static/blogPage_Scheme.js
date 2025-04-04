const mongoose = require("mongoose");

let blogPageSchema = mongoose.Schema({
    id: Number,
    title: String,
    date: String,
    description: String,
    image: String,
});

module.exports = mongoose.model("BlogPage", blogPageSchema);
