const Blog = require('../models/blog')



module.exports = {

    seedBlog: function (req, res) {
        const data = [
            {
                title: 'title a',
                description: 'description a'
            },
            {
                title: 'title b',
                description: 'description b'
            },
            {
                title: 'title c',
                description: 'description c'
            },
            {
                title: 'title d',
                description: 'description d'
            },
            {
                title: 'title e',
                description: 'description e'
            }
        ]

        Blog.create(data, function (err, data) {
            if (err) res.json(err)
            else res.json(data)
        })
    },

    getBlog: function (req, res) {
        Blog.find(function (err, data) {
            if (err) res.json(err)
            else res.json(data)
        })
    },

    addBlog: function (req, res) {
        const blog = {
            title: req.body.title,
            description: req.body.description
        }

        Blog.create(blog, function (err, data) {
            if (err) res.json(err)
            else res.json(data)
        })
    },

    deleteAllBlog: function (req, res) {
        Blog.remove({}, function (err) {
            if (err) res.json(err)
            else res.json("All Blog Deleted")
        })
    }

}
