const { Router } = require("express");
const { addPoster, getRecommedePosts, deletePoster, getPostersById } = require("../Controllers/posterController");
const router = Router();

router.post('/add_post',addPoster)
router.post('/get_recommended_posters',getRecommedePosts)
router.post('/delete_poster',deletePoster)
router.post('/get_poster_by_user_id',getPostersById)

module.exports = router