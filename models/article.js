const mongoose = require('mongoose');
const increment = require('mongoose-increment');

let articleSchema = new mongoose.Schema({
    articleId: {
        type: Number,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    content: {
        type: String
    }
}, {
    timestamps: true
});

articleSchema.plugin(increment, {
    modelName: 'Article',
    fieldName: 'articleId',
});

module.exports = mongoose.model('Article', articleSchema)
