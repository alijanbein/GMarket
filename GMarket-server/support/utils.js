
const inputVerify = (input, type) => {
    const HttpError = require("./http-error")
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
  
module.exports = inputVerify;