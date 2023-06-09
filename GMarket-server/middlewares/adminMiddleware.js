const HttpError = require("../support/http-error");

exports.adminMiddleware = (req,res,next) => {
    if(req.user.type == "admin") next();
    else {
        const error = new HttpError("your are not an admin",405);
        return next(error)
    }
}