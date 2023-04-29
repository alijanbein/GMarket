const { default: mongoose } = require("mongoose");

const auctionSchema = new mongoose.Schema({
  poster: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Poster",
    require: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    require: true,
  },
  startingBid: { type: Number, require: true, default: 10000 },
  startTime: Date,
  endTime: Date,
  currentWinner: { type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    require: true,default:null },
});

const Auction = mongoose.model("Auction", auctionSchema);
module.exports = Auction;
