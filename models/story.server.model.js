'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const storySchema = new Schema ({
  title : String,
  main  : String,
  _creator : {
    type : String,
    ref : 'User'
  }
})

var Story = mongoose.model('Story', storySchema);
module.exports = Story;
