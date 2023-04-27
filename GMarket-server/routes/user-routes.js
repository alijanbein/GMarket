const { Router } = require("express");
const router = Router();
const {
  getUserByNumber,
  getRate,
  addRate,
  reportUser,
  getReports,
  getUsersMessgesdBefore,
  sendMessage,
  getOneConversation,
  search,
  getCarouselImages,
  updateUserData,
} = require("../Controllers/userController");

router.post("/get_user_by_nummber", getUserByNumber);
router.post("/get_rate", getRate);
router.post("/add_rate", addRate);
router.post("/report_user", reportUser);
router.post("/get_all_messaging_users", getUsersMessgesdBefore);
router.post("/send_message", sendMessage);
router.post("/get_one_conversation", getOneConversation);
router.post("/search", search);
router.get("/get_carousel_images", getCarouselImages);
router.post("/update_user_data", updateUserData);

module.exports = router;
