const User = require('../models/user')
const passport = require('passport')

module.exports = {
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


}
