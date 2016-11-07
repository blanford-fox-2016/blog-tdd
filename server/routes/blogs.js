var express = require('express');
var router = express.Router();
const blogController = require('../controllers/controller.api.blogs')

router.get('/', blogController.getBlog)
router.get('/seed', blogController.seedBlog)
router.post('/create', blogController.addBlog)
router.delete('/delete', blogController.deleteAllBlog)
module.exports = router;
