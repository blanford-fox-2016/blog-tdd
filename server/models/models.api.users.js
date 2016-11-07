'use strict'

const mongoose = require('mongoose')
const passportLocalMongoose = require('passport-local-mongoose')

const Schema = mongoose.Schema

let UsersSchema = new Schema({
  username  : String,
  password  : String
}, {
  timestamps : true
})

UsersSchema.plugin(passportLocalMongoose)

let user = mongoose.model('Users', UsersSchema)

module.exports = user
