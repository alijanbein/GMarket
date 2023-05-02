const { Router } = require("express");
const { registerToAuction, getLatestAuction, joinWithHigherBid } = require("../Controllers/auctionController");
const router = Router();

router.post("/register_to_auction",registerToAuction)
router.get("/get_latest_auction",getLatestAuction)
// router.post("/add_new_bid",joinWithHigherBid)

module.exports = router;