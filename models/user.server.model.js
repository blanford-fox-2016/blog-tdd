'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

cost userSchema = new Schema({
  username : {
    type : String,
    unique : true,
    required : true,
    trim : true
  },
  name : {
    type : String,
    required : true
  },
  password: {
    type : String,
    required : true
  },
  stories : [{
    type: Schema.ObjectId,
    ref : 'Story'
  }]
})

// authenticate input against database documents
UserSchema.statics.authenticate = function(email, password, callback) {
  User.findOne({ email: email })
      .exec(function (error, user) {
        if (error) {
          return callback(error);
        } else if ( !user ) {
          var err = new Error('User not found.');
          err.status = 401;
          return callback(err);
        }
        bcrypt.compare(password, user.password , function(error, result) {
          if (result === true) {
            return callback(null, user);
          } else {
            return callback();
          }
        })
      });
}

// hash password before saving to database
UserSchema.pre('save', () => {
  var user = this;
  bcrypt.hash(user.password, 10, (err, hash) => {
    if (err) {
      return next(err);
    }
    user.password = hash;
    next();
  })
})

var User = mongoose.model('User', UserSchema);
module.exports = User;
