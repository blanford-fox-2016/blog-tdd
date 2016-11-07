const blog = require('../models/modelBlog.js')
module.exports = {
    listBlogs: function(req, res, next) {
        blog.find({}, function(err, doc) {
            res.json(doc)
        })
    },
    createBlog: function(req, res, next){
        var insert = blog({
            title: req.body.title,
            body: req.body.body
        })

        insert.save(function(err,data){
            if(err) throw err;
            res.json(data)
        })
    }
}