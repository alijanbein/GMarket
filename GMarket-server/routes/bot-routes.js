const { Router } = require("express");
const { sendMessageToBot, deleteAuction } = require("../Controllers/botController");
const router = Router();

router.post("/post_message",sendMessageToBot)
router.post("/delete_auction",deleteAuction)


module.exports = router