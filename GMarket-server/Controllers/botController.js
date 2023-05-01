const dialogflow = require('dialogflow');
const Auction = require('../Models/Auction');
const HttpError = require('../support/http-error');

exports.sendMessageToBot = async(req,res,next) => {
    const googleProjectId = process.env.googleProjectId
    const googlePrivateKeyId = process.env.googlePrivateKeyId
    const googlePrivateKey = process.env.googlePrivateKey
    const googleClientEmail = process.env.googleClientEmail
    const dialogFlowSessionLanguageCode = process.env.dialogFlowSessionLanguageCode
    const credentials  = {
        client_email:googleClientEmail,
        private_key:googlePrivateKey
    }

    const {message,sessionId} = req.body;
    const sessionClient = new dialogflow.SessionsClient({googleProjectId,credentials});

    // const sessionPath = sessionClient.sessionPath(googleProjectId,sessionId)
    const sessionPath = sessionClient.sessionPath(googleProjectId, sessionId);

    const request = {
        session: sessionPath,
        queryInput: {
            text: {
                text:message,
                languageCode:dialogFlowSessionLanguageCode
            }
        }
    }
    try {
        const response = await sessionClient.detectIntent(request)
        res.send({
            status:"sucess",
            response: response[0].queryResult.fulfillmentMessages[0].text.text[0]
        })
    } catch (error) {
        res.send({
            status:"error",
           error:  error.message
        })
    }
} 

exports.deleteAuction = async(req,res,next) =>{
    try {
     const {auctionId} = req.body;
     const auction = await Auction.findById(auctionId); 
     const now = new Date()
     if(auction && now >= auction.endTime){
         await Auction.findByIdAndDelete(auctionId);
         res.send({status:"sucess", auction})
     }
     else {
         const err = new HttpError("can't delete auction until it finishes ,Time Remaining:"+ (auction.endTime -now), 405);
                 return next(err); 
     }
    } catch (error) {
         const err = new HttpError(error.message, 405);
         return next(err);
    }
 }
 

 exports.testWebHook = (req,res,next) =>{
    console.log("it works wow!");
 }