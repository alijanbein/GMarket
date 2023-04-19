const { default: mongoose } = require("mongoose");

const posterSchema = new mongoose.Schema({
    title : { type: String, require: true },
    product_type:{ type: String, require: true },
    farmer: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    description:  { type: String, require: true },
    image_url :  { type: String, require: true },
})


const Poster = mongoose.model("Poster",posterSchema);

module.exports = Poster;