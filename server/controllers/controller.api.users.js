const User = require('../models/user')
const Blog = require('../models/blog')
const passport = require('passport')

module.exports = {

    seedUser: function (req, res) {
        const data = [
            {
                userId: '1',
                name: 'name a',
                username: 'username a',
                password: 'password a',
                email: 'aaa@gmail.com',
            },
            {
                userId: '2',
                name: 'name b',
                username: 'username b',
                password: 'password b',
                email: 'bbb@gmail.com',
            }
        ]

        User.create(data, function (err, data) {
            if (err) res.json(err)
            else res.json(data)
        })
    },

    getUser: function (req, res) {
        User.find(function (err, data) {
            if (err) res.json(err)
            else res.json(data)
        })
    },

    localRegister: function (req, res) {
        User.register(new User ({
            name: req.body.name,
            username: req.body.username,
            email: req.body.email
        }), req.body.password, function (err, data) {
            if (err) res.json(err)
            else {
                passport.authenticate('local')(req, res, function () {
                    req.session.save(function (err) {
                        if (err) res.json(err)
                        else res.json(data)
                    })
                })
            }
        })
    },

    deleteUserByPostId: function (req, res) {
        User.findOneAndRemove({
            userId: req.params.userId
        }, function (err, data) {
            if (err) res.json(err)
            else res.json(data)
        })
    },

    deleteAllUser: function (req, res) {
        User.remove({}, function (err, data) {
            if (err) res.json(err)
            else res.json("All users deleted")
        })
    }

}
