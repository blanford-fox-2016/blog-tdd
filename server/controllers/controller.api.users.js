'use strict'
const passport = require('passport')
const User = require('../models/models.api.users')

let addUser = (req, res) => {
  User.register({
    username : req.body.username,
    password : req.body.password
  }, req.body.password, (err, new_user) => {
    if(err) res.status(400).json({'error': 'Error: ${err}'})
    if(!new_user) res.status(404).json({'message': 'Failed to add new user'})

    passport.authenticate('local')(req,res, () => {
      req.session.save((err, next) => {
        if (err) {
          return next(err)
        }else{
          res.status(200).json(new_user)
        }
      })
    })
  })
}

module.exports = {
  // allUsers   : allUsers,
  addUser    : addUser
  // editUser   : editUser,
  // deleteUser  : deleteUser
}
