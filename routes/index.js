var express = require('express');
var router = express.Router();
var userCtrl = require('../controllers/user.server.controller')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/user', userCtrl.create)
router.get('/user', userCtrl.list)
router.put('/user/:username', userCtrl.update)


module.exports = router;
