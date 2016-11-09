'use strict'
const article = require('../models/article')
const ModelUser = require('../models/user')
const passport = require('passport');

module.exports = {
    getAllArticles: function(req, res, next) {
        article.find({}, function(err, data) {
            if (err) {
                res.json(err)
            } else {
                res.json({
                    message: 'List article'
                })
            }
        })
    },
    postNewArticle: function(req, res, next) {
        article.create({
            title: req.body.title,
            content: req.body.content,
        }, function(err, data) {
            if (err) {
                res.json(err)
            } else {
                res.json({
                    title: data.title,
                    content: data.content
                })
            }
        })
    },
    updateArticle: function(req, res, next) {
        article.findOneAndUpdate({
            articleId: req.params.id
        }, {
            title: req.body.title,
            content: req.body.content
        }, {
            new: true
        }, function(err, data) {
            if (err) {
                res.json(err)
            } else {
                res.json({
                    title: data.title,
                    content: data.content
                })
            }
        })
    },
    deleteArticle: function(req, res, next) {
        article.remove({
            articleId: req.params.id
        }, function(err, data) {
            if (err) {
                res.json(err)
            } else {
                res.json({ message: `Article Deleted Successfully` })
            }
        })
    },
    registerUser: function(req, res, next) {
        ModelUser.register({
            name: req.body.name,
            username: req.body.username
        }, req.body.password, function(err, result) {
            if (err) {
                res.json(err)
            } else {
                passport.authenticate('local')(req, res, function() {
                    if (err) {
                        return next(err)
                    } else {
                        res.json({
                            name: result.name,
                            username: result.username,
                            message: `register success`
                        })
                    }
                })
            }
        })
    },
    loginProcess: function(req, res, next) {

        passport.authenticate('local', (err, user, info) => {
            res.json({ id: user.userId, username: user.username, name: user.name })
        })(req, res, next)

    }

}
