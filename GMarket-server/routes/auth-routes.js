const { Router } = require("express");
const router = Router();
const { store, sendVerificationCodeSMS, confirmVerificationCode, register } = require("../Controllers/authController");
router.post("/send_verification_code_sms",sendVerificationCodeSMS);
router.post("/confirm_verification_code",confirmVerificationCode);
router.post("/register",register);
router.post("/image",sotreSc);

module.exports = router;