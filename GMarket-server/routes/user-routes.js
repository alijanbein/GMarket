const { Router } = require("express");
const router = Router();
const { getUserByNumber, getRate, addRate } = require("../Controllers/userController");

router.post("/get_user_by_nummber",getUserByNumber);
router.post("/get_rate",getRate);
router.post("/add_rate",addRate);

module.exports = router;