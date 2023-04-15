const express = require("express");
const app = express();
const AuthRoutes = require("./routes/auth-routes");
require("dotenv").config();

app.use("/auth", AuthRoutes);

app.use((req, res, next) => {
  const error = new HttpError("can't find route", 404);
  return next(error);
});

app.use((error, req, res, next) => {
  res.status(error.code || 400);
  res.send({ message: error.message || "sonthing went wrong !" });
});

app.listen(process.env.PORT, () => {});
