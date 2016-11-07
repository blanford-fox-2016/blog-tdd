'use strict'

const chai = require('chai')
  , expect = chai.expect
  , should = chai.should()
  , chaiHttp = require('chai-http')

chai.use(chaiHttp);

// test get all data from database
it('it will be pass if get all data', function(done) {
  chai.request('http://localhost:3000')
    .get('/api/blogs')
    .end(function(err, res) {

    res.should.be.status(200);

    // expect(err).to.be.null;
    // expect(res).to.have.status(200); // <= Call done to signal callback end

    done()
  });
}) ;

// test insert data into database
it('it will be pass if insert give a response message ( insert success )', function(done) {
  chai.request('http://localhost:3000')
  .post('/api/blogs')
  .send({title: 'hallo', content:'hallo'})
  .end(function(err, res) {

    res.body.message.should.be.equal("insert success");

    done()
  });
}) ;

// delete data from
it('it will be pass if insert give a response message ( insert success )', function(done) {
  chai.request('http://localhost:3000')
  .delete('/api/blogs')
  .send({ '_id' : "58204abf80b3a30f22536522" })
  .end(function(err, res) {

    res.body.message.should.be.equal("delete success");

    done()
  });
}) ;
