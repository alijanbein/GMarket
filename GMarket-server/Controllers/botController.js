const dialogflow = require('dialogflow');

exports.sendMessageToBot = async(req,res,next) => {
    const googleProjectId = process.env.googleProjectId
    const googlePrivateKeyId = process.env.googlePrivateKeyId
    const googlePrivateKey = process.env.googlePrivateKey
    const googleClientEmail = process.env.googleClientEmail
    const dialogFlowSessionLanguageCode = process.env.dialogFlowSessionLanguageCode
    const {message,sessionId} = req.body;
    const credentials  = {
        client_email:googleClientEmail,
        private_key:googlePrivateKey
    }
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
            response
        })
    } catch (error) {
        res.send({
            status:"error",
           error:  error.message
        })
    }
    
}