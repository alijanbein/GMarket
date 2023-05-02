const { Router } = require("express");
const router = Router();
const { store, sendVerificationCodeSMS, confirmVerificationCode, register, storeSeconderyUserData, adminLogin } = require("../Controllers/authController");
router.post("/send_verification_code_sms",sendVerificationCodeSMS);
router.post("/confirm_verification_code",confirmVerificationCode);
router.post("/register",register);
router.post("/complet_profile",storeSeconderyUserData);
router.post("/admin_login",adminLogin);

module.exports = router;