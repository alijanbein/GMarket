const { Router } = require("express");
const { addPoster, getRecommedePosts } = require("../Controllers/posterController");
const router = Router();

router.post('/add_post',addPoster)
router.post('/get_recommended_posters',getRecommedePosts)

module.exports = router