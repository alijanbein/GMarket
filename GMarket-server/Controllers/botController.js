const dialogflow = require('dialogflow');

exports.sendMessageToBot = async(req,res,next) => {
    // const googleProjectId = process.env.googleProjectId
    // const googlePrivateKeyId = process.env.googlePrivateKeyId
    // const googlePrivateKey = process.env.googlePrivateKey
    // const googleClientEmail = process.env.googleClientEmail
    console.log(googlePrivateKeyId);
    const {message,sessionId} = req.body;
    console.log({
        message,
        sessionId
    });
}