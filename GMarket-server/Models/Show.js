const { default: mongoose } = require("mongoose");

const show = new mongoose.Schema({
    carousel : [{type : String}],
    cartegories :{
        type:[String],
        default: ["fruits","vegetable","summer","winter"]
    }
})