const { Router } = require("express");
const router = Router();
const { getUserByNumber } = require("../Controllers/userController");

router.get("/get_user_by_nummber",getUserByNumber);

module.exports = router;