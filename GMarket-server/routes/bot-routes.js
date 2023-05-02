const { Router } = require("express");
const { sendMessageToBot, deleteAuction, webhookAPi } = require("../Controllers/botController");
const router = Router();

router.post("/post_message",sendMessageToBot)
router.post("/delete_auction",deleteAuction)
router.post("/webhook",webhookAPi)


module.exports = router