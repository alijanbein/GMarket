const { Router } = require("express");
const { getReports, getUsers, deleteUser } = require("../Controllers/adminController");
const router = Router();

router.get('/reports',getReports);
router.get('/users',getUsers);
router.get('/delete_by_id',deleteUser);



module.exports = router