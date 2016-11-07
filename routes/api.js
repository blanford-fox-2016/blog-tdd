const express = require('express');
const router = express.Router();
const controller = require('../controller/controller')

// -----------------------------------------------------------------------------
// CRUD ARTICLE
// -----------------------------------------------------------------------------

router.get('/article', controller.getAllArticles);
router.post('/article', controller.postNewArticle);
router.put('/article/:id', controller.updateArticle)
router.delete('/article/:id', controller.deleteArticle)


// -----------------------------------------------------------------------------
// User Authentication (Register & Login)
// ------------------------------------------------------------------------------

router.post('/register', controller.registerUser)

module.exports = router;
