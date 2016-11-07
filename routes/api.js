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

router.put('/article/:id', function(req, res, next) {
    article.update({
        _id: req.params.id
    }, {
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
})

router.delete('/article/:id', function(req, res, next) {
    article.remove({
        _id: req.params.id
    }, function(err, data) {
        if (err) {
            res.json(err)
        } else {
            res.json(data)
        }
    })
})


module.exports = router;
