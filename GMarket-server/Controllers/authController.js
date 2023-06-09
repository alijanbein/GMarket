const User = require("../Models/User.model");
const HttpError = require("../support/http-error");
const Verification = require("../Models/Verification");
const jwt = require("jsonwebtoken");
const globals = require("../support/globals");

var mime = require("mime");

exports.sendVerificationCodeSMS = async (req, res, next) => {
  const { phone_number } = req.body;
  const verificationCode = Math.floor(Math.random() * 9000 + 1000);
  console.log(verificationCode);
  const message =
    "to verifiy your number this is the verification Code " + verificationCode;

  try {
    const client = require("twilio")(
      process.env.TWILIO_ACCOUNT_SID,
      process.env.TWILIO_AUTH_TOKEN
    );

    client.messages
      .create({
        body: message,
        
        from: "+12705155704",
        to: "+" + phone_number,
      })
      .then((message) => {console.log(message)})
      .catch((error) => {
        const err = new HttpError(error.message, 405);
        return next(err);
      });
    const verificationExist = await Verification.findOne({
      phone_number: phone_number,
    });
    if (verificationExist) {
      verificationExist.verification_code = verificationCode;
      await verificationExist.save();
      res.send({ status: "sucess", message: "code resended" });
      return;
    }
    const verification = new Verification();
    verification.phone_number = phone_number;
    verification.verification_code = verificationCode;
    verification.save();

    res.send(verification);
  } catch (error) {
    const err = new HttpError("Server Error try again later", 405);
    next(err);
  }
};

exports.confirmVerificationCode = async (req, res, next) => {
  try {
    const { code, phone_number } = req.body;
    const number = await Verification.findOne({ phone_number: phone_number });
    if (!number) {
      const err = new HttpError(
        "somthing wen't wrong please try again later",
        401
      );
      return next(err);
    }
    if (code != number.verification_code) {
      const err = new HttpError("Invalid Code", 401);
      return next(err);
    }
    res.send({ status: "sucess" });
  } catch (error) {
    const err = new HttpError("server error", 401);
    return next(err);
  }
};

const inputVerify = (input, type) => {
  if (!!!input) {
    const err = new HttpError("null input", 403);
    return next(err);
  }
  if (type == "name") {
    if (input.length <= 0) {
      return false;
    } else return true;
  } else if (type == "email") {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const emailIsValid = !!input.match(emailRegex);
    if (emailIsValid) {
      return true;
    } else return false;
  } else if (type == "phone") {
    const phoneRegex = /^[0-9]+$/;
    if (!!input.match(phoneRegex) && input.length == 11) {
      return true;
    } else return false;
  } else if (type == "type") {
    if (input == "farmer" || input == "customer" || input == "admin") {
      return true;
    } else {
      return false;
    }
  } else return false;
};

exports.register = async (req, res, next) => {
  try {
    const { first_name, last_name, email, phone_number, type, image, bio } =
      req.body;
    const first_name_valid = inputVerify(first_name, "name");
    const last_name_valid = inputVerify(last_name, "name");
    const email_valid = inputVerify(email, "email");
    const phone_valid = inputVerify(phone_number, "phone");
    const type_valid = inputVerify(type, "type");
    let user = await User.findOne({ phone_number });
  
    if (
      first_name_valid &&
      last_name_valid &&
      email_valid &&
      phone_valid &&
      type_valid
    ) {
      if (user) {
        user.first_name = first_name;
        user.last_name = last_name;
        user.email = email;
        user.type = type;
        user.phone_number = phone_number;
        await user.save();
      } else if (!user) {
        user = new User();
        user.first_name = first_name;
        user.last_name = last_name;
        user.email = email;
        user.type = type;
        user.phone_number = phone_number;
        await user.save();
      }
      const token = jwt.sign({ user }, process.env.SECRET);
      res.send({
        status: "sucess",
        user: user,
        token: token,
      });
    } else {
      const err = new HttpError("invalid format", 401);
      return next(err);
    }
  } catch (error) {
    const err = new HttpError(error.message, 401);
    return next(err);
  }
};

exports.storeSeconderyUserData = async (req, res, next) => {
  try {
    const { bio, phone_number } = req.body;
    const bio_valid = inputVerify(bio, "name");
    if (!bio_valid) {
      const err = new HttpError("invalid input", 401);
      return next(err);
    }
    const extention = mime.getExtension(req.files.image.mimetype);
    if (extention != "png" && extention != "jpg" && extention != "jpeg") {
      const err = new HttpError("can't upload this type of image", 401);
      return next(err);
    }
    const imageURL = `${globals.getIpAddress()}:${
      process.env.PORT
    }/photos/${phone_number}.${extention}`;
    if (!req.files || Object.keys(req.files).length === 0) {
      const err = new HttpError("No files were uploaded.", 401);
      return next(err);
    }
    const filePath = `images/${phone_number}.${extention}`;
    let image = req.files.image;
    image.mv(filePath, function (error) {
      if (error) {
        const err = new HttpError(error.message, 401);
        return next(err);
      }
    });
    let user;
    try {
      user = await User.findOne({ phone_number: phone_number });

      if (user) {
        user.profile_picture = imageURL;
        user.bio = bio;
        await user.save();
      } else {
        const err = new HttpError(
          "Error user do not exist please re register or login",
          401
        );
        return next(err);
      }
    } catch (error) {
      const err = new HttpError(error.message, 403);
      return next(err);
    }
    res.send({ status: "sucess", imageURL: imageURL, user: user });
  } catch (error) {
    const err = new HttpError("Somthing wen wrong", 500);
    return next(err);
  }
};

exports.adminLogin = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const emailExist = await User.findOne({ email: email });
   
    if (emailExist && emailExist.password === password) {
      const token = jwt.sign({ user:emailExist }, process.env.SECRET);
        res.send({status:"sucess", token:token});
    } else {
      const err = new HttpError("invalid email or password", 500);
      return next(err);
    }
  } catch (error) {
    const err = new HttpError("Somthing wen wrong", 500);
    return next(err);
  }
};
