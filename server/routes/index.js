var express = require('express');
var router = express.Router();
const userController = require('../controllers/controller.api.users')

router.post('/register', userController.localRegister)

module.exports = router;
