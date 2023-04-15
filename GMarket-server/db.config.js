const mongoose = require("mongoose");

 mongoose.connect(process.env.DB_URL).then(()=>console.log("db connected succefully")).catch(error =>console.error())

