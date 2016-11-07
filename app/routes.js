const express = require('express'),
    router = express.Router(),
    blogController = require('./controllers/blog')

module.exports = router

router.get("/", blogController.getMain)

router.get("/blog", blogController.getBlogs)
router.post("/blog", blogController.postBlog)

router.get("/blog/:id", blogController.getBlog)
router.delete("/blog/:id", blogController.deleteBlog)
router.put("/blog/:id", blogController.updateBlog)

