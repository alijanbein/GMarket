const { default: mongoose } = require("mongoose");

const conversationSchema = new mongoose.Schema({
  sender: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  recipient: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  message: { type: String },
  timestamp: { type: Date, default: Date.now },
});

const messageSchema = new mongoose.Schema({
    participants: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    conversation:[conversationSchema],
    lastActivity: { type: Date, default: Date.now }
});

const Message = mongoose.model("Message",messageSchema);

module.exports = Message;
