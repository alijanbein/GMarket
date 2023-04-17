const { Router } = require("express");
const { getReports } = require("../Controllers/adminController");
const router = Router();

router.get('/reports',getReports);


module.exports = router