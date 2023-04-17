const { default: mongoose, mongo } = require("mongoose");
const carouselSchema = mongoose.Schema({
    image_url : {type : String}
})
const showSchema = new mongoose.Schema({
    section: {type:String, default: 'home'},
    carousel : [carouselSchema],
    categories :{
        type:[String],
        default: ["fruits","vegetable","summer","winter"]
    }
})

const Show = mongoose.model("Show",showSchema);

module.exports = Show;