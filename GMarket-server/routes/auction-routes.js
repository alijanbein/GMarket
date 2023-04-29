const { Router } = require("express");
const { addAuction } = require("../Controllers/auctionController");
const router = Router();

router.get("test",addAuction)

module.exports = router;