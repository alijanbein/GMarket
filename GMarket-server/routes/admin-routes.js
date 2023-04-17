const { Router } = require("express");
const { getReports, getUsers, deleteUser, addCarouselImages, deleteCarousel } = require("../Controllers/adminController");
const router = Router();

router.get('/reports',getReports);
router.get('/users',getUsers);
router.post('/delete_by_id',deleteUser);
router.post('/add_carousel_image',addCarouselImages);
router.post('/delete_carousel_image',deleteCarousel);



module.exports = router