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

const { networkInterfaces } = require('os');

const nets = networkInterfaces();
const results = Object.create(null); // Or just '{}', an empty object

for (const name of Object.keys(nets)) {
    for (const net of nets[name]) {
        // Skip over non-IPv4 and internal (i.e. 127.0.0.1) addresses
        // 'IPv4' is in Node <= 17, from 18 it's a number 4 or 6
        const familyV4Value = typeof net.family === 'string' ? 'IPv4' : 4
        if (net.family === familyV4Value && !net.internal) {
            if (!results[name]) {
                results[name] = [];
            }
            results[name].push(net.address);
        }
    }
}

// function getIPAddress() {
//   const interfaces = os.networkInterfaces();
//   for (let iface in interfaces) {
//     for (let alias of interfaces[iface]) {
//       if (alias.family === 'IPv4' && alias.internal === false) {
//         return alias.address;
//       }
//     }
//   }

//   return '0.0.0.0';
// }
// const ip = getIPAddress()
console.log(results.WiFi[0]);
globals.setIpAddress(results.WiFi[0]);

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
