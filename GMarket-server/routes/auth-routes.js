const { Router } = require("express");
const router = Router();
const { sendVerificationCodeSMS, confirmVerificationCode } = require("../Controllers/authController");
router.post("/send_verification_code_sms",sendVerificationCodeSMS);
router.post("/confirm_verification_code",confirmVerificationCode);

module.exports = router;