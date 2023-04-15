const User = require('../Models/User.module');
const HttpError = require('../support/http-error');
const Verification = require("../Models/Verification")
exports.sendVerificationCodeSMS = async (req,res,next) =>{
    const {phone_number} = req.body
    const verificationCode = Math.floor(Math.random() * 9000 + 1000);
    console.log(verificationCode);
    const message  = "to verifiy your number this is the verification Code " + verificationCode
    try {
        const verificationExist = await Verification.findOne({phone_number:phone_number});
        if(verificationExist){
            verificationExist.verification_code = verificationCode;
            await verificationExist.save()
            res.send({status: "succes",
            message: "code resended"
        })
        return;
        }
        console.log("teset");
        const verification = new Verification()
        verification.phone_number = phone_number;
        verification.verification_code = verificationCode
        verification.save()
        res.send(verification);
        // const client = require('twilio')(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

        // client.messages
        // .create({
        //    body: message,
        //    from: '+16203776088',
        //    to: '+96170838043'
        //  })
        // .then(message => {
        //     const userExist = User.find({phone_number:'wdwqd'})
        //     // if (userExist) {
        //     //     console.log(userExist);
        //     // }
        //     res.send("message sent")}).catch(error =>{
        //     const err = new HttpError(error.message,405)
        //     return next(err);
        // });
        
    } catch (error) {
        const err = new HttpError("Server Error try again later",405)
        next(err);
    }
}

exports.confirmVerificationCode = async (req,res,next) => {
 try {
    const {code,phone_number} = req.body;
    const number = await Verification.findOne({phone_number: phone_number});
    if(!number){
        const err = new HttpError("somthing wen't wrong please try again later",401);
        return next(err)
    }
    if(code != number.verification_code){
        const err = new HttpError("Invalid Code",401);
        return next(err)
    }
    res.send({status: succes})
 } catch (error) {
    const err = new HttpError("server error",401);
    return next(err)
 }
}
