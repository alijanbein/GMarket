const express = require("express");
const app = express();
const AuthRoutes = require("./routes/auth-routes");
const bodyParser = require("body-parser")
const HttpError = require("./support/http-error")
const fileUpload = require('express-fileupload');
app.use(fileUpload());

require("dotenv").config();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());
app.use("/photos",express.static('images'));
app.use("/auth", AuthRoutes);

app.use((req, res, next) => {
  const error = new HttpError("can't find route", 404);
  return next(error);
});

app.use((error, req, res, next) => {
  res.status(error.code || 400);
  res.send({ message: error.message || "sonthing went wrong !" });
});

app.listen(process.env.PORT, () => {
    console.log("server is runing ");
    require("./db.config")
});