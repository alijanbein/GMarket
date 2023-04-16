const User = require("../Models/User.module")

exports.getUserByNumber = async(req,res,next) => {
    try {
        const {phone_number} = req.body 
        const user = await User.findOne({phone_number:phone_number});
        if (!user) {
            const err = new HttpError("user does not exist", 401);
            return next(err);
        }
        res.send({
            status: "succes",
            user: user
        })
    } catch (error) {
        
    }
}

