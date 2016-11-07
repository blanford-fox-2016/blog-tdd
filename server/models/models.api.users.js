'user strict'

const mongoose = require('mongose')
const passportLocalMongoose = require('passport-local-mongoose')

const Schema = mongoose.Schema

let UsersSchema = new Schema ({
  username  : String,
  password  : String
}, {
  timestamps : true
})

UsersSchema.plugin(passportLocalMongoose)

module.exports = mongoose.model('Users'. UsersSchema)
