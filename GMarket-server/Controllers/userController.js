const Message = require("../Models/Message.model");
const Report = require("../Models/Reports");
const User = require("../Models/User.model");
const Poster = require("../Models/poster");
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
    const reportedBefore = await Report.findOne({
      sender: user_number,
      reported: phone_number,
    });
    if (reportedBefore) {
      const err = new HttpError(
        "You Reported this user before, waiting for admin",
        200
      );
      return next(err);
    }
    const newReport = new Report();
    newReport.sender = user_number;
    newReport.reported = phone_number;
    newReport.message = message;
    await newReport.save();
    res.send({ status: "sucess", report: newReport });
  } catch (error) {
    const err = new HttpError(error.message, 500);
    return next(err);
  }
};

exports.sendMessage = async (req, res, next) => {
  const { message, recipient } = req.body;
  const user = req.user;
  const sender = user._id;
  if (!message || !recipient) {
    const err = new HttpError("invalid input", 405);
    return next(err);
  }
  try {
    let conversation = await Message.findOne({
      participants: { $all: [sender, recipient] },
    });
    if (!conversation) {
      const newConversation = new Message({
        participants: [sender, recipient],
        messages: [],
        lastActivity: new Date().toISOString(),
      });
      await newConversation.save();

      conversation = newConversation;
    }
    conversation.conversation.push({
      sender,
      recipient,
      message,
      timestamp: new Date().toISOString(),
    });
    conversation.lastActivity = new Date().toISOString();
    await conversation.save();
    res.send({ status: "sucess", conversation: conversation });
  } catch (error) {
    const err = new HttpError("sever error", 5);
    return next(err);
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
      messages: messages,
    });
  } catch (error) {
    const err = new HttpError("Server Error", 500);
    return next(err);
  }
};
exports.getOneConversation = async (req, res, next) => {
  try {
    const { recipient } = req.body;
    const user = req.user;
    const user_id = user._id;

    const conversation = await Message.findOne({
      participants: { $all: [user_id, recipient] },
    });
    if (!conversation) {
      const err = new HttpError("can't find this conversation", 500);
      return next(err);
    }
    res.send({
      status: "sucess",
      conversation: conversation,
    });
  } catch (error) {
    const err = new HttpError("Server Error", 500);
    return next(err);
  }
};

exports.search = async (req, res, next) => {
 try {
  const { search_text } = req.body;
  const search_response = [];
  const regex = new RegExp("^" + search_text, "i");
  const ExistUser = await User.find({ first_name: { $regex: regex } });
  const ExistPoster = await Poster.find({ title: { $regex: regex } });
  if (!ExistUser.length == 0) {
    search_response.push(ExistUser);
  }
  if (!ExistPoster.length == 0) {
    search_response.push(ExistPoster);
  }
  res.send({ status: "sucess", search_response: search_response });
 } catch (error) {
  const err = new HttpError("Server Error", 500);
  return next(err);
 }
};


