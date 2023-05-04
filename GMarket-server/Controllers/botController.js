const dialogflow = require("dialogflow");
const Auction = require("../Models/Auction");
const HttpError = require("../support/http-error");
const dfff = require("dialogflow-fulfillment");
const User = require("../Models/User.model");
exports.sendMessageToBot = async (req, res, next) => {
  const googleProjectId = process.env.googleProjectId;
  const googlePrivateKeyId = process.env.googlePrivateKeyId;
  const googlePrivateKey = process.env.googlePrivateKey;
  const googleClientEmail = process.env.googleClientEmail;
  const dialogFlowSessionLanguageCode =
    process.env.dialogFlowSessionLanguageCode;
  const credentials = {
    client_email: googleClientEmail,
    private_key: googlePrivateKey,
  };

  const { message, sessionId } = req.body;
  const sessionClient = new dialogflow.SessionsClient({
    googleProjectId,
    credentials,
  });

  const sessionPath = sessionClient.sessionPath(googleProjectId, sessionId);

  const request = {
    session: sessionPath,
    queryInput: {
      text: {
        text: message,
        languageCode: dialogFlowSessionLanguageCode,
      },
    },
   
  };
  try {
    const response = await sessionClient.detectIntent(request);
    res.send({
      status: "sucess",
      response: response[0].queryResult.fulfillmentMessages[0].text.text[0],
    });
  } catch (error) {
    res.send({
      status: "error",
      error: error.message,
    });
  }
};

exports.deleteAuction = async (req, res, next) => {
  try {
    const { auctionId } = req.body;
    const auction = await Auction.findById(auctionId);
    const now = new Date();
    if (auction && now >= auction.endTime) {
      await Auction.findByIdAndDelete(auctionId);
      res.send({ status: "sucess", auction });
    } else {
      const err = new HttpError(
        "can't delete auction until it finishes ,Time Remaining:" +
          (auction.endTime - now),
        405
      );
      return next(err);
    }
  } catch (error) {
    const err = new HttpError(error.message, 405);
    return next(err);
  }
};

exports.webhookAPi = (req, res, next) => {
  const { queryResult } = req.body;
  const context = queryResult.outputContexts.find((context) => context);
  const intent = queryResult.intent.displayName;
  const agent = new dfff.WebhookClient({
    request: req,
    response: res,
  });
  function testF(agent) {
    agent.add("sending response from webhook server");
  }
  const phoneConfirm = async (agent) => {
    const phoneNumber = context.parameters["phone-number"];
    const user = await User.findOne({ phone_number: phoneNumber });
    const currentAuction = await Auction.find().sort({ startTime: 1 });
    const userId = user._id;
    const auctionId = currentAuction[0]._id;
    currentAuction[0].startingBid = context.parameters["number"];
    const auctionExist = await Auction.findById(auctionId);
    if (auctionExist) {
      if (auctionExist.startingBid < context.parameters["number"]) {
        auctionExist.startingBid = context.parameters["number"];
        auctionExist.currentWinner = userId;
        await auctionExist.save();
        agent.add("confirmed, to apply your Bid please type confirm");
      }
    }
  };
  const intentMap = new Map();
  intentMap.set(
    "confirmPhone",
    intent == "confirmPhone" ? phoneConfirm : testF
  );
  agent.handleRequest(intentMap);
};
