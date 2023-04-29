const Auction = require("../Models/Auction");
const HttpError = require("../support/http-error");

exports.registerToAuction = async (req, res, next) => {
  try {
    const user = req.user;
    const user_id = user._id;
    const { posterId } = req.body;
    const auctionExist = await Auction.findOne({ user: user_id });
    if (auctionExist) {
      const err = new HttpError(
        "user can only have one auction ,wait until your auction end",
        403
      );
      return next(err);
    }
    const newAuction = new Auction();
    (newAuction.user = user_id), (newAuction.poster = posterId);
    await newAuction.save();
    res.send({ status: "sucess", auction: newAuction });
  } catch (error) {
    const err = new HttpError("server error", 405);
    return next(err);
  }
};

