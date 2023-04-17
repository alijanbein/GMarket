const { Router } = require("express");
const { getReports, getUsers } = require("../Controllers/adminController");
const router = Router();

router.get('/reports',getReports);
router.get('/users',getUsers);



module.exports = router