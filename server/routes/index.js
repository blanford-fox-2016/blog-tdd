var express = require('express');
var router = express.Router();
const userController = require('../controllers/controller.api.users')

router.get('/user/seed', userController.seedUser)
router.get('/user', userController.getUser)
router.post('/register', userController.localRegister)
router.delete('/user/delete', userController.deleteAllUser)
router.delete('/user/delete/:userId', userController.deleteUserByPostId)

module.exports = router;
