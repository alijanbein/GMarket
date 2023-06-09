const Report = require("../Models/Reports");
const Show = require("../Models/Show");
const User = require("../Models/User.model");
const HttpError = require("../support/http-error");
const mime = require("mime");
const globals = require("../support/globals")

exports.getReports = async (req, res, next) => {
  try {
    const reports = await Report.find().populate("reported");
    if (!reports) {
      const err = new HttpError("can't find reports", 403);
      return next(err);
    }
    res.send({ status: "sucess", reports: reports });
  } catch (error) {
    const err = new HttpError("Server Error", 500);
    return next(err);
  }
};

exports.getUsers = async (req, res, next) => {
  try {
    const users = await User.find();
    if (!users) {
      const err = new HttpError("can't find Users", 405);
      return next(err);
    }
    res.send({
      status: "sucess",
      users: users,
    });
  } catch (error) {
    const err = new HttpError("Server Error", 500);
    return next(err);
  }
};

exports.deleteUser = async (req, res, next) => {
  try {
    const { userId } = req.body;
 
    const deletetedUser = await  User.findOneAndDelete({ _id: userId });
    if(deletetedUser) {
              res.send({ status: "sucess", user: deletetedUser });
    }

  } catch (error) {
    const err = new HttpError(error.message, 500);
    return next(err);
  }
};


exports.addCarouselImages = async(req,res,next) => {
  const allowedExtensions = ["png", "jpg", "jpeg"];

  const random = Math.floor(100000000 + Math.random() * 900000000);
  try {
    const extention = mime.getExtension(req.files.c_image.mimetype);
  if(!allowedExtensions.includes(extention)) {
    const err = new HttpError("can't upload this type of image", 401);
    return next(err);
  }
  const imageURL = `${globals.getIpAddress()}:${process.env.PORT}/photos/carousel_${random}.${extention}`;
  if (!req.files || Object.keys(req.files).length === 0) {
    const err = new HttpError("No files were uploaded.", 401);
    return next(err);
  }
  const filePath = `images/carousel_${random}.${extention}`;
  req.files.c_image.mv(filePath, function (error) {
    if (error) {
      const err = new HttpError(error.message, 401);
      return next(err);
    }
  });
  let show = await Show.findOne({section:"home"});
  if(!show){
    const newShow = new Show({
      section: "home",
      carousel:[],
      categories: []
    })
    await newShow.save()
    show = newShow;
  }
  show.carousel.push({image_url:imageURL})
  await show.save();
  res.send({status:"sucess",show:show})
  } catch (error) {
    const err = new HttpError(error.message, 500);
    return next(err);
  }
}

exports.deleteCarousel =async(req,res,next) => {
try {
  const {image_id} = req.body;
  const show =await Show.findOne({section:"home"});
  const newCarousel = show.carousel.filter(data => data._id != image_id);
  show.carousel = newCarousel;
  show.save();
  res.send({status:"sucess"})
} catch (error) {
  const err = new HttpError(error.message, 500);
  return next(err);
}
}