const { default: mongoose } = require("mongoose");

const verificationSchema = new mongoose.Schema({
  phone_number: { type: Number, require: true },
  verification_code: { type: Number, require: true },
});

const verification = mongoose.model("Verification", verificationSchema);

module.exports = verification;
