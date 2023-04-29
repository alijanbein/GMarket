const { default: mongoose } = require("mongoose");

const auctionSchema = new mongoose.Schema({
    poster:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Poster",
        require:true
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        require:true
    },
    createdAt: {
        type: Date,
        default: Date.now,
        required: true
      },
})

const Autction = mongoose.model("Auction",auctionSchema);
module.exports = Autction