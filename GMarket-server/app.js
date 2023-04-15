const express = require('express');
const app = express()
const AuthRoutes = require("./routes/auth-routes")
require("dotenv").config();


app.use("/auth",AuthRoutes)

app.listen(process.env.PORT,()=>{
})