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
      id      : req.body.id,
      title   : req.body.title,
      content : req.body.content
    });

    newBlog.save(function(err, data) {
      if (err) throw err;
      res.json(data)
    });

  },
  // delete data blog
  deleteBlog : function(req, res, next){
    blog.findOneAndRemove({ id : req.body.id }, function(err, data) {
      if (err) throw err;

      console.log(data);
      res.json(data);

    });
  },
  // update data blog
  updateBlog : function(req, res, next){
    console.log(req.body.id);
    console.log(req.body.title);
    console.log(req.body.content);
    blog.findOneAndUpdate({ id: req.body.id }, { title: req.body.title, content : req.body.content }, { new : true }, function(err, data) {
      if (err) throw err;
      console.log(data);
      res.json(data)
    });
  }

}
