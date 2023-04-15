const { Router } = require("express");
const router = Router();

router.get("/test",(req,res,next)=>{
    res.send("<h1>alinj</h1>")
})

module.exports = router;