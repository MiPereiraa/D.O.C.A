const { Router } = require("express");
const router = Router();
 
const { login } = require("../controller/loginController");
 
// POST
 
router.post('/post/login', login);
 
module.exports = router;