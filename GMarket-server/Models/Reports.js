const { default: mongoose } = require("mongoose");

const reportSchema = new mongoose.Schema({
    sender :  { type: Number, require: true },
    reported : { type: Number, require: true },
    message : { type: String, require: true },
})

const Report = mongoose.model("Report",reportSchema);

module.exports = Report