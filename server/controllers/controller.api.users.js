'use strict'
const passport = require('passport')
const User = require('../models/models.api.users')

/*
  * @api {get} /api/users
  * @api purpose get all users
  * @apiName allUsers
  * @apiGroup usrs
  *
  * @apiSuccess show all user's username {String}
*/
let allUsers = (req, res) => {
  User.find({}, (err, users) => {
    if(err) res.status(400).json({'error': 'Error: ${err}'})
    if(!users) res.status(404).json({'message': 'Failed to get all users'})
    console.log(`get all users`);
    res.status(200).json(users)
  })
}

let addUser = (req, res) => {
  console.log(`ini masuk`);
  console.log(req.body);
  User.register({
    username : req.body.username
    // arcticle id add here
  }, req.body.password, (err, new_user) => {
    console.log(`test`);
    if(err) res.status(400).json({'error': 'Error: ${err}'})
    if(!new_user) res.status(404).json({'message': 'Failed to add new user'})

    passport.authenticate('local')(req, res, () => {
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
  allUsers   : allUsers,
  addUser    : addUser
  // editUser   : editUser,
  // deleteUser  : deleteUser
}
