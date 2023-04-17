const Poster = require("../Models/poster");
const HttpError = require("../support/http-error");
const mime = require("mime");
exports.addPoster = async (req, res, next) => {
  try {
    const { title, product_type, descrtiption } = req.body;
    const user = req.user;
    const userID = user._id;
    const phone_number = user.phone_number;
    const extention = mime.getExtension(req.files.poster_image.mimetype);
    console.log(extention);
    if (extention != "png" && extention != "jpg" && extention != "jpeg") {
      const err = new HttpError("can't upload this type of image", 401);
      return next(err);
    }
    const imageURL = `${req.protocol}://${req.hostname}:${process.env.PORT}/photos/post_${phone_number}.${extention}`;
    if (!req.files || Object.keys(req.files).length === 0) {
      const err = new HttpError("No files were uploaded.", 401);
      return next(err);
    }
    console.log(req.files.poster_image);
    const filePath = `images/post_${phone_number}.${extention}`;
    req.files.poster_image.mv(filePath, function (error) {
      if (error) {
        const err = new HttpError(error.message, 401);
        return next(err);
      }
    });
    const newPoster = new Poster();
    newPoster.title = title;
    newPoster.product_type = product_type;
    newPoster.farmer = userID;
    newPoster.image_url = imageURL;
    newPoster.description = descrtiption;
    await newPoster.save();
    res.send({ status: "sucess", poter: newPoster });
  } catch (error) {
    const err = new HttpError("server error", 500);
      return next(err);
  }
};
