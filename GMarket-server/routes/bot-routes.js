const { Router } = require("express");
const { sendMessageToBot } = require("../Controllers/botController");
const router = Router();

router.post("/post_message",sendMessageToBot)


module.exports = router