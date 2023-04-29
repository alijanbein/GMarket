const { Router } = require("express");
const { registerToAuction } = require("../Controllers/auctionController");
const router = Router();

router.get("/register_to_auction",registerToAuction)

module.exports = router;