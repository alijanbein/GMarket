const { default: mongoose } = require("mongoose");

const posterSchema = new mongoose.Schema({

})

const Poster = mongoose.model("Poster",posterSchema);

module.exports = Poster;