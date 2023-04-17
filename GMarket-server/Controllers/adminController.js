const Report = require("../Models/Reports");
const User = require("../Models/User.model");
const HttpError = require("../support/http-error");

exports.getReports = async (req, res, next) => {
    try {
    const reports = await Report.find();
    if(!reports){
        const err = new HttpError("can't find reports", 403);
      return next(err);
    }
      res.send({ status: "sucess", reports:reports });
    } catch (error) {
      const err = new HttpError("Server Error", 500);
      return next(err);
    }
  };


  exports.getUsers = async(req,res,next) => {
    try {
        const users = await User.find();
        if(!users){
            const err = new HttpError("can't find Users", 405);
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

  exports.deleteUser = async(req,res,next) => {
      try {
        const {userId} = req.body
        User.findOneAndDelete({_id:userId},(err,user) => {
            if(err){
                const err = new HttpError("Somthing wen't wrong", 500);
                return next(err);
            }
            if(!user){
                const err = new HttpError("user does not exist", 500);
                return next(err);
            }
            else {
                res.send({status: "sucess",
                user:user
            })
            }
        })
      } catch (error) {
        const err = new HttpError("Server Error", 500);
        return next(err);
      }
    } 