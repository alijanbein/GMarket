const { Router } = require("express");
const { addPoster, getRecommedePosts, deletePoster } = require("../Controllers/posterController");
const router = Router();

router.post('/add_post',addPoster)
router.post('/get_recommended_posters',getRecommedePosts)
router.post('/delete_poster',deletePoster)

module.exports = router