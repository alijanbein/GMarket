const { Router } = require("express");
const { addPoster } = require("../Controllers/posterController");
const router = Router();

router.post('/add_post',addPoster)

module.exports = router