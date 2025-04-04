const mongoose = require('mongoose');
let recipeSchema = mongoose.Schema({
    id: Number,
    name: String,
    price: Number,
    image: String,
});

module.exports = mongoose.model('Recipes', recipeSchema);