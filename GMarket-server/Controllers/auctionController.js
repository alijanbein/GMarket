const Auction = require("../Models/Auction");
const HttpError = require("../support/http-error");

exports.registerToAuction = async (req, res, next) => {
  try {
    const user = req.user;
    const user_id = user._id;
    const { posterId,startingBid } = req.body;
    // const auctionExist = await Auction.findOne({ user: user_id });
    const auctions = await Auction.find().sort({'endTime':-1}).limit(1);
    if (auctions.length == 0) {
    //   const err = new HttpError(
    //     "user can only have one auction ,wait until your auction end",
    //     403
    //   );
    // return next(err);
    const newAuction = new Auction()
    newAuction.user = user_id;
    newAuction.poster = posterId;
    newAuction.startingBid = startingBid;
    const now = new Date()
    const end = new Date(now)
    end.setMinutes(now.getMinutes() + 30);
    newAuction.startTime = now;
    newAuction.endTime = end
    await newAuction.save()
    res.send({status:"sucess", newAuction})
    return
    }
  else {
    
}
  } catch (error) {
    const err = new HttpError(error.message, 405);
    return next(err);
  }
};

// exports.getLatestAuction = async (req,res,next) => {
//     try {
//         const latestAuction = await Auction.find().sort({ createdAt: 1 })
//         .limit(1).populate("user").populate("poster");
//         if(latestAuction.length > 0) {
//             res.send({status:"sucess",latestAuction})
//         }
//         else {
//             const err = new HttpError("can't find acutions", 405);
//             return next(err);
//         }
//     } catch (error) {
//         const err = new HttpError("server error", 405);
//         return next(err);
//     }
// }


exports.startAuction = async() =>{
    const auctions = await Auction.find().sort({endTime:1}).exec();
}


