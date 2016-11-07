'use strict'

var mongoose = require('mongoose')

var blogSchema = mongoose.Schema({
    title: String,
    body: String
}, {
    timestamps: true
});

module.exports = mongoose.model('blog', blogSchema)