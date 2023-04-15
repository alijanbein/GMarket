const { Router } = require("express");
const router = Router();
const { sendVerificationCodeSMS } = require("../Controllers/authController");
router.get("/test",sendVerificationCodeSMS);

module.exports = router;