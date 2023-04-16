const { Router } = require("express");
const router = Router();
const { getUserByNumber, getRate, addRate, reportUser, getReports } = require("../Controllers/userController");

router.post("/get_user_by_nummber",getUserByNumber);
router.post("/get_rate",getRate);
router.post("/add_rate",addRate);
router.post("/report_user",reportUser);
router.post("/get_reports",getReports);

module.exports = router;