var express = require('express');
var router = express.Router();
const controller = require('../controller/controllerBlog')


router.get('/', controller.getAllBlog);
router.post('/', controller.insertBlog);
router.delete('/', controller.deleteBlog);
router.put('/', controller.updateBlog);

module.exports = router;
