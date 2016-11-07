var express = require('express');
var router = express.Router();
const userController = require('../controllers/controller.api.users')

router.get('/user/seed', userController.seedUser)
router.post('/register', userController.localRegister)
router.delete('/user/delete', userController.deleteAllUser)

module.exports = router;
