const User = require("../Models/User.model");
const HttpError = require("../support/http-error");

exports.getReports = async (req, res, next) => {
    try {
      const { phone_number } = req.body;
      const user = await User.findOne({ phone_number: phone_number });
      if (!user) {
        const err = new HttpError("User undefined", 405);
        return next(err);
      }
      const reported = user.reported;
      res.send({ status: "sucess", reported: reported });
    } catch (error) {
      const err = new HttpError("Server Error", 500);
      return next(err);
    }
  };


  exports.getUsers = async(req,res,next) => {
    try {
        const users = await User.find();
        if(!users){
            const err = new HttpError("can't find Users", 500);
            return next(err);
        }
        res.send({
            status: "sucess",
            users: users
        })
    } catch (error) {
        const err = new HttpError("Server Error", 500);
        return next(err);
    }
  }