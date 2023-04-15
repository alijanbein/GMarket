const HttpError = require('../support/http-error');

exports.sendVerificationCodeSMS = (req,res,next) =>{
const verificationCode = Math.floor(Math.random() * 9000 + 1000);

    const message  = "to verifiy your number this is the verification Code " + verificationCode
    try {
        const client = require('twilio')(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

        client.messages
        .create({
           body: message,
           from: '+16203776088',
           to: '+96170838043'
         })
        .then(message => res.send("message sent")).catch(error =>{
            const err = new HttpError(error.message,405)
            next(err);
        });
        
    } catch (error) {
        const err = new HttpError("Server Error try again later",405)
        next(err);
    }
}
