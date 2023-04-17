const { default: mongoose, mongo } = require("mongoose");

const showSchema = new mongoose.Schema({
    section: {type:String, default: 'home'},
    carousel : [{type : String}],
    categories :{
        type:[String],
        default: ["fruits","vegetable","summer","winter"]
    }
})

const Show = mongoose.model("Show",showSchema);

module.exports = Show;