const HttpError = require("../support/http-error");

exports.addPoster = async(req,res,next) => {
    const {name,categorie,desctiption} = req.body;
    const {poster_image} = req.files.poster_image;
    const user = req.user;
    const {phone_number} = user;
    const extention = mime.getExtension(req.files.poster_image.mimetype);
    console.log(extention);
    if (extention != "png" && extention != "jpg" && extention != "jpeg") {
      const err = new HttpError("can't upload this type of image", 401);
      return next(err);
    }
    const imageURL = `${req.protocol}://${req.hostname}:${process.env.PORT}/photos/${phone_number}.${extention}`;
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
    });}