const Message = require("../Models/Message.model");
const User = require("../Models/User.model");
const HttpError = require("../support/http-error");

exports.getUserByNumber = async (req, res, next) => {
  try {
    const authUser = req.user;
    const phone_number = authUser.phone_number;
    console.log(req.body);
    if (!!!phone_number) {
      const err = new HttpError("invalid input", 401);
      return next(err);
    }
    const user = await User.findOne({ phone_number: phone_number });
    if (!user) {
      const err = new HttpError("user does not exist", 401);
      return next(err);
    }
    res.send({
      status: "sucess",
      user: user,
    });
  } catch (error) {
    const err = new HttpError("Server Error", 500);
    return next(err);
  }
};

exports.addRate = async (req, res, next) => {
  try {
    const user_number = req.user.phone_number;
    const { rating, phone_number } = req.body;
    const targetUser = await User.findOne({ phone_number: phone_number });
    if (!targetUser) {
      const err = new HttpError("User undefined", 405);
      return next(err);
    }
    const ratedBefore = targetUser.rating.filter(
      (data) => data.user_number == user_number
    );
    if (ratedBefore.length > 0) {
      ratedBefore[0].rate = rating;
      await targetUser.save();
    } else {
      const newRate = {
        user_number: user_number,
        rate: rating,
      };
      targetUser.rating.push(newRate);
      await targetUser.save();
    }
    res.send({ status: "sucess", user: targetUser });
  } catch (error) {
    const err = new HttpError(error.message, 500);
    return next(err);
  }
};

exports.getRate = async (req, res, next) => {
  try {
    const { phone_number } = req.body;
    const user = await User.findOne({ phone_number: phone_number });
    if (!user) {
      const err = new HttpError("User undefined", 405);
      return next(err);
    }
    const sum = user.rating.reduce((acc, curr) => acc + curr.rate, 0);
    const rating = sum / user.rating.length;
    res.send({ status: "sucess", rating: rating });
  } catch (error) {
    const err = new HttpError("Server Error", 500);
    return next(err);
  }
};

exports.reportUser = async (req, res, next) => {
  try {
    const user_number = req.user.phone_number;
    const { message, phone_number } = req.body;
    if (message.length <= 0) {
      const err = new HttpError("Invalid input", 405);
      return next(err);
    }
    const targetUser = await User.findOne({ phone_number: phone_number });
    if (!targetUser) {
      const err = new HttpError("User undefined", 405);
      return next(err);
    }
    console.log(message);
    const reportedBefore = targetUser.reported.filter(
      (data) => data.user_number == user_number
    );
    console.log(reportedBefore);
    if (reportedBefore.length > 0) {
      const err = new HttpError(
        "your report has been sent before waitng for admin",
        200
      );
      return next(err);
    } else {
      const newReport = {
        user_number: user_number,
        message: message,
      };
      targetUser.reported.push(newReport);
      await targetUser.save();
    }
    res.send({ status: "sucess", user: targetUser });
  } catch (error) {
    const err = new HttpError(error.message, 500);
    return next(err);
  }
};

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

exports.sendMessage = async (req,res,next) => {
    const {message, reciver} = req.body;
    if(!message || !reciver){
        const err = new HttpError("invalid input", 4.5);
    return next(err);
    }
    try {
        const conversation = await Message.findOne({
            participants:{$all: [sender,reciver]}
        });
        if(!conversation){ 
            const newConversation = new Message({
                participants: [sender, recipient],
                messages: [],
                lastActivity: new Date().toISOString()
              });
        }
    } catch (error) {
        
    }
};

exports.getUsersMessgesdBefore = async (req, res, next) => {
  const user = req.user;
  const user_id = user._id;
  try {
    const messages = await Message.find({ participants: user_id })
      .populate("participants")
      .sort("-lastActivity");
    res.send({
        status: "sucess",
        messages:messages
    })
  } catch (error) {
    const err = new HttpError("Server Error", 500);
    return next(err);
  }
};

