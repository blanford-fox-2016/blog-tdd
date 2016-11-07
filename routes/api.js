const express = require('express');
const router = express.Router();
const article = require('../models/article')
const ModelUser = require('../models/user')
const passport = require('passport');

/* GET ModelUsers listing. */
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
        title: req.body.title,
        content: req.body.content,
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
        title: req.body.title,
        content: req.body.content
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

router.post('/register', function(req, res, next) {
    ModelUser.register({
        name: req.body.name,
        username: req.body.username
    }, req.body.password, function(err, result) {
        if (err) {
            res.json(err)
        } else {
            passport.authenticate('local')(req, res, function() {
                req.session.save(function(err, next) {
                    if (err) {
                        return next(err)
                    } else {
                        res.json(result)
                    }
                })
            })
        }
    })
})

module.exports = router;
