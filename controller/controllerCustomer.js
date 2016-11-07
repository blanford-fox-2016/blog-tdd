const customer = require('../models/modelCustomer');

module.exports = {
  // get all data customer from database
  getAllCustomer : function(req, res, next) {
    customer.find({}, function(err, data){
      res.json(data)
    })
  },
  // insert new data customer
  insertCustomer : function(req, res, next){

    var newCustomer = customer({
      id      : req.body.id,
      username   : req.body.username
    });

    newCustomer.save(function(err, data) {
      if (err) throw err;
      res.json(data)
    });

  },
  //
  updateCustomer : function(req, res, next){

  },
  //
  deleteCustomer : function(req, res, next){

  }
}
