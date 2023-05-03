const { default: mongoose } = require("mongoose");

const reportSchema = new mongoose.Schema({
    sender :  { type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    reported : { type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    message : { type: String, require: true },
})

const Report = mongoose.model("Report",reportSchema);

module.exports = Report