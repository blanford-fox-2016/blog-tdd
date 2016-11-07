var express = require('express');
var router = express.Router();
var article = require('../models/article')

/* GET users listing. */
router.get('/article', function(req, res, next) {
    article.find({}, function(err, data) {
        if (err) {
            res.json(err)
        } else {
            res.json(data)
        }
    })
});

router.post('/article', function(req, res, next) {
    article.create({
        name: req.body.name,
        article: req.body.article,
        created_at: Date()
    }, function(err, data) {
        if (err) {
            res.json(err)
        } else {
            res.json(data)
        }
    })
});

module.exports = router;
