const Auction = require("../Models/Auction");
const HttpError = require("../support/http-error");

exports.registerToAuction = async (req, res, next) => {
  try {
    const user = req.user;
    const user_id = user._id;
    const { posterId, startingBid } = req.body;
    const auctions = await Auction.find().sort({ endTime: -1 }).limit(1);
    let now;
    if (auctions.length == 0) {
        now = new Date();
    } else {
        now = auctions[0].endTime;
    }
    let end = new Date(now);
    end.setMinutes(now.getMinutes() + 30);
    const newAuction = new Auction();
    newAuction.user = user_id;
    newAuction.poster = posterId;
    newAuction.startingBid = startingBid;

    newAuction.startTime = now;
    newAuction.endTime = end;
    await newAuction.save();
    res.send({ status: "sucess", newAuction });
    return;


  } catch (error) {
    const err = new HttpError(error.message, 405);
    return next(err);
  }
};

exports.getLatestAuction = async (req,res,next) => {
    try {
        const latestAuction = await Auction.find().sort({ startTime: 1 })
        .limit(1).populate("user").populate("poster");
        if(latestAuction.length > 0) {
            res.send({status:"sucess",latestAuction})
        }
        else {
            const err = new HttpError("can't find acutions", 405);
            return next(err);
        }
    } catch (error) {
        const err = new HttpError("server error", 405);
        return next(err);
    }
}

exports.joinWithHigherBid = async(req,res,next) => {
       try {
        const user = req.user;
        const user_id = user._id
        const {auctionId,bid} = req.body;

        const auctionExist = await Auction.findById(auctionId);
        if(auctionExist) {
            if(auctionExist.startingBid < bid){
                auctionExist.startingBid = bid;
                auctionExist.currentWinner = user_id
                await auctionExist.save()
                res.send({status :"sucess", newAuction:auctionExist} )
            }
            else {
                const err = new HttpError("Bid should be more than the current", 405);
                return next(err);
            }
        }
        else {
            const err = new HttpError("can;t find auction", 405);
                return next(err);
        }
       } catch (error) {
        const err = new HttpError(error.message, 405);
                return next(err);
       }
}


exports.startAuction = async () => {
  const auctions = await Auction.find().sort({ endTime: 1 }).exec();
};
