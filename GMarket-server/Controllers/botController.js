const dialogflow = require('dialogflow');


exports.sendMessageToBot = async(req,res,next) => {
    const {message,sessionId} = req.body;
    console.log({
        message,
        sessionId
    });
}