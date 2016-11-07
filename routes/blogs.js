var express = require('express');
var router = express.Router();
var controller = require('../controllers/controllerBlog')

/* GET home page. */
router.get('/list', controller.listBlogs);
router.post('/create', controller.createBlog)
router.delete('/delete', controller.deleteBlog)

module.exports = router;