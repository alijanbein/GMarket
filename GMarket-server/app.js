const express = require("express");
const app = express();
const AuthRoutes = require("./routes/auth-routes");
const UserRoutes = require("./routes/user-routes");
const PostRoutes = require("./routes/poster-routes");
const botRoutes = require("./routes/bot-routes");
const AuctionRoutes = require("./routes/auction-routes");
const adminRoutes = require("./routes/admin-routes");
const bodyParser = require("body-parser");
const HttpError = require("./support/http-error");
const fileUpload = require("express-fileupload");
const os = require("os");
const globals = require("./support/globals");
const { authMiddleware } = require("./middlewares/authMiddleware");
const { adminMiddleware } = require("./middlewares/adminMiddleware");
const cors = require("cors");
const { auctionWork } = require("./Controllers/auctionController");
app.use(cors());

app.use(fileUpload());

require("dotenv").config();

const interfaces = os.networkInterfaces();
let ipAddress = "";
for (const iface of Object.values(interfaces)) {
  for (const entry of iface) {
    if (entry.family === "IPv4" && !entry.internal) {
      ipAddress = entry.address;
      break;
    }
  }
  if (ipAddress) {
    break;
  }
}
console.log(ipAddress);
globals.setIpAddress(ipAddress);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/photos", express.static("images"));
app.use("/auth", AuthRoutes);
app.use("/user", authMiddleware, UserRoutes);
app.use("/posts", authMiddleware, PostRoutes);
app.use("/admin", authMiddleware, adminMiddleware, adminRoutes);
app.use("/bot", botRoutes);
app.use("/auction", authMiddleware, AuctionRoutes);
app.use((req, res, next) => {
  const error = new HttpError("can't find route", 404);
  return next(error);
});

app.use((error, req, res, next) => {
  res.status(error.code || 400);
  res.send({ message: error.message || "sonthing went wrong !" });
});

app.listen(process.env.PORT, async() => {
   auctionWork()
  console.log("server is runing ");
  require("./db.config");
});
