var express = require('express');
var router = express.Router();
const controller = require('../controller/controllerCustomer')

/* GET home page. */
router.get('/', controller.getAllCustomer);

module.exports = router;
