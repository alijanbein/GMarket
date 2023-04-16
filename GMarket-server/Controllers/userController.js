const User = require("../Models/User.model");
const HttpError = require("../support/http-error");

exports.getUserByNumber = async (req, res, next) => {
  try {
    const { phone_number } = req.body;
    console.log(req.body);
    if(!!!phone_number){
        const err = new HttpError("invalid input", 401);
      return next(err);
    }
    const user = await User.findOne({ phone_number: phone_number });
    if (!user) {
      const err = new HttpError("user does not exist", 401);
      return next(err);
    }
    res.send({
      status: "succes",
      user: user,
    });
  } catch (error) {
    const err = new HttpError("Server Error", 500);
    return next(err);
  }
};
