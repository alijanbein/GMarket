const { default: mongoose } = require("mongoose");

const reportSchema = new mongoose.Schema({
    sender :  { type: Number, require: true },
    Reported : { type: Number, require: true },
    message : { type: String, require: true },
})

const Report = mongoose.model("Report",reportSchema);