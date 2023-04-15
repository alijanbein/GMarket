const express = require('express');
const app = express()
require("dotenv").config();
const client = require('twilio')(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

client.messages
.create({
   body: 'This is the ship that made the Kessel Run in fourteen parsecs?',
   from: '+16203776088',
   to: '+96170838043'
 })
.then(message => console.log(message.sid));

app.listen(process.env.PORT,()=>{
})