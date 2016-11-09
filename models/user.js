const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');
const increment = require('mongoose-increment');

let userSchema = new mongoose.Schema({
    userId: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    password: {
        type: String
    }
}, {
    timestamps: true
});

userSchema.plugin(increment, {
    modelName: 'User',
    fieldName: 'userId',
});


userSchema.plugin(passportLocalMongoose)

module.exports = mongoose.model('User', userSchema)
