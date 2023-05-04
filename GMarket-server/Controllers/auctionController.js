const Auction = require("../Models/Auction");
const Message = require("../Models/Message.model");
const HttpError = require("../support/http-error");

exports.registerToAuction = async (req, res, next) => {
  try {
    const user = req.user;
    const user_id = user._id;
    const { posterId, startingBid } = req.body;
    const auctions = await Auction.find().sort({ endTime: -1 }).limit(1);
    let now;
    if (auctions.length == 0) {
        now = new Date();
    } else {
        now = auctions[0].endTime;
    }
    let end = new Date(now);
    end.setMinutes(now.getMinutes() + 30);
    const newAuction = new Auction();
    newAuction.user = user_id;
    newAuction.poster = posterId;
    newAuction.startingBid = startingBid;

    newAuction.startTime = now;
    newAuction.endTime = end;
    await newAuction.save();
    res.send({ status: "sucess", newAuction });
    return;


  } catch (error) {
    const err = new HttpError(error.message, 405);
    return next(err);
  }
};

exports.getLatestAuction = async (req,res,next) => {
    try {
        const latestAuction = await Auction.find().sort({ startTime: 1 })
        .limit(1).populate("user").populate("poster");
        if(latestAuction.length > 0) {
            res.send({status:"sucess",latestAuction:latestAuction[0]})
        }
        else {
            res.send({status :"sucess",latestAuction:{}})
        }
    } catch (error) {
        const err = new HttpError("server error", 405);
        return next(err);
    }
}




const deleteAuction = async(auctionId) =>{
    try {
     const auction = await Auction.findById(auctionId); 
     const now = new Date()
     if(auction && now >= auction.endTime){
         await Auction.findByIdAndDelete(auctionId);
            return true
        }
     else {
         return false
     }
    } catch (error) {
         return false
    }
 }
 

const startAuction = async () => {
    const currentAuction = await Auction.find().find().sort({ startTime: 1 });
    if(currentAuction.length != 0) {
        return currentAuction[0];
    }
    
};


const sendMessageToWinner = async (recipient, sender,message) => {
    if(sender == null){
        return
    }
  try {
    let conversation = await Message.findOne({
      participants: { $all: [sender, recipient] },
    });
    if (!conversation) {
      const newConversation = new Message({
        participants: [sender, recipient],
        messages: [],
        lastActivity: new Date().toISOString(),
      });
      await newConversation.save();

      conversation = newConversation;
    }
    conversation.conversation.push({
      sender,
      recipient,
      message,
      timestamp: new Date().toISOString(),
    });
    conversation.lastActivity = new Date().toISOString();
    await conversation.save();
    return "sucess"
  } catch (error) {
    return error.message
  }
}


exports.auctionWork = () =>{
    setInterval(async()=> {
        const can = await startAuction();
        if(can){
            const now = new Date()
            if(can.endTime - now < 0){
                sendMessageToWinner(can.user,can.currentWinner,"i won the acution of your poster how i can meet you")
                const s = await deleteAuction(can._id)
          } 
        

          else {
          }
        }
      },10000)
}