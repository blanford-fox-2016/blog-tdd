const blog = require('../models/modelBlog');

module.exports = {

  // get all blog
  getAllBlog : function(req, res, next) {
    blog.find({}, function(err, data){
      res.json(data)
    })
  },

  // insert data blog PPAP
  insertBlog : function(req, res, next){

    var newBlog = blog({
      title : req.body.title,
      content : req.body.content
    });

    newBlog.save(function(err, data) {
      if (err) throw err;
      res.json({message : "insert success"})
    });

  },

  // delete data blog
  deleteBlog : function(req, res, next){
    User.findOneAndRemove({ '_id' : req.body._id }, function(err) {
      if (err) throw err;

      // we have deleted the user
      res.json({ message : 'delete success' });

    });
  }


}
