const mongoose = require('mongoose');

let connection = mongoose.createConnection(process.env.TEST);
let articleSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    article: {
        type: String,
        required: true
    },
    created_at: {
        type: Date,
        required: true
    }
});

let Article = connection.model('Article', articleSchema);

module.exports = Article
