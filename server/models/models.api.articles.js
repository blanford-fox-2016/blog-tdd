'use strict'

const mongoose = require('mongoose')

const Schema = mongoose.Schema

let ArticlesSchema = new Schema({
  content : String
}, {
  timestamps : true
})

let article = mongoose.model('Articles', ArticlesSchema)

module.exports = article
