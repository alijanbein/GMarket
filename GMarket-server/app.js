const express = require("express");
const app = express();
const AuthRoutes = require("./routes/auth-routes");
const UserRoutes = require("./routes/user-routes");
const PostRoutes = require("./routes/poster-routes");
const botRoutes = require("./routes/bot-routes");
const AuctionRoutes = require("./routes/auction-routes");
const adminRoutes = require("./routes/admin-routes");
const HttpError = require("./support/http-error");
const fileUpload = require("express-fileupload");
const globals = require("./support/globals");
const { authMiddleware } = require("./middlewares/authMiddleware");
const { adminMiddleware } = require("./middlewares/adminMiddleware");
const cors = require("cors");
const { auctionWork } = require("./Controllers/auctionController");
app.use(cors());

app.use(fileUpload());

require("dotenv").config();

const { networkInterfaces } = require('os');

const nets = networkInterfaces();
const results = Object.create(null); 

for (const name of Object.keys(nets)) {
    for (const net of nets[name]) {
        
        const familyV4Value = typeof net.family === 'string' ? 'IPv4' : 4
        if (net.family === familyV4Value && !net.internal) {
            if (!results[name]) {
                results[name] = [];
            }
            results[name].push(net.address);
        }
    }
}


globals.setIpAddress(results.WiFi[0]);

app.use(express.json());
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
  require("./db.config");
});
