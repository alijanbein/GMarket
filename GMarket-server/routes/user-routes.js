const { Router } = require("express");
const router = Router();
const { getUserByNumber, getRate, addRate, reportUser, getReports, getUsersMessgesdBefore, sendMessage, getOneConversation, search } = require("../Controllers/userController");

router.post("/get_user_by_nummber",getUserByNumber);
router.post("/get_rate",getRate);
router.post("/add_rate",addRate);
router.post("/report_user",reportUser);
router.post("/get_all_messaging_users",getUsersMessgesdBefore);
router.post("/send_message",sendMessage);
router.post("/get_one_conversation",getOneConversation);
router.post("/search",search);

module.exports = router;