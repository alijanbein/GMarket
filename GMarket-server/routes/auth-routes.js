const { Router } = require("express");
const router = Router();
const { sendVerificationCodeSMS } = require("../Controllers/authController");
router.post("/test",sendVerificationCodeSMS);

module.exports = router;