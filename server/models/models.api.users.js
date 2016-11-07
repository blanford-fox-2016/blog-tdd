'user strict'

const mongoose = require('mongose')

const Schema = mongoose.Schema

let UsersSchema = new Schema ({
  username  : String,
  password  : String
}, {
  timestamps : true
})

module.exports = mongoose.model('Users'. UsersSchema)
