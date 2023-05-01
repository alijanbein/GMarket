const { Router } = require("express");
const { sendMessageToBot, deleteAuction, testWebHook } = require("../Controllers/botController");
const router = Router();

router.post("/post_message",sendMessageToBot)
router.post("/delete_auction",deleteAuction)
router.post("/test",testWebHook)


module.exports = router