var express = require('express');
var router = express.Router();
const controller = require('../controller/controllerBlog')

/* GET home page. */
router.get('/', controller.getAllBlog);
router.post('/', controller.insertBlog);

module.exports = router;
