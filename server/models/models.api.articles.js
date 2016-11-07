'use strict'

const mongoose = require('mongoose')

const Schema = mongoose.Schema

let ArticlesSchema = new Schema({
  content : String,
  userId  : [{
    type: Schema.Types.ObjectId,
    ref: 'Users'
  }]
}, {
  timestamps : true
})

module.exports = mongoose.model('articles', ArticlesSchema)
