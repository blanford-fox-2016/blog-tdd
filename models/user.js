const mongoose = require('mongoose');

let Schema = mongoose.Schema;

let userSchema = new Schema ({
  email: String,
  password: String
})

module.exports = mongoose.model('User',userSchema)
