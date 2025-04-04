const mongoose = require('mongoose');
let headerSchema = mongoose.Schema({
    id: Number,
    name: String,
    route: String
});

module.exports = mongoose.model('Headers', headerSchema);