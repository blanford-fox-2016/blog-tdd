'use strict'

const mocha = require('mocha')
const chai = require('chai')
const expect = chai.expect
const chaiHttp = require('chai-http')
chai.use(chaiHttp)

const url = 'http://localhost:3000'


// Testig the server in root directory
describe('Server Checking', function() {
  it('Check the server', function(done) {
    //this.timeout(3000)
    chai.request(url)
      .get('/')
      .end(function(err, res) {
        expect(res).to.have.status(200)
        done()
      })
  })
});

// Try to register user and check it
describe('Register User', function() {
  it('Register User Given Unexisted Username', function (done) {
    chai.request(url)
      .post('/user')
      .send({
        username : 'kembalian',
        name : 'dl',
        password: 'kambing'
      })
      .end(function(err, res){
        console.log(res.body);
        expect(res).to.have.status(200)
        //expect(res).to.have.property('password')
        done()
      })
  })

});


// Get all user from database

describe('Get all user from database', function() {
  it('Show All Users', function (done) {
    chai.request(url)
      .get('/user')
      .end(function(err, res){
        expect(res).to.be.json
        expect(res).to.have.status(200)
        done()
      })
  })
});

//Update the user

describe.skip('Update the user from database', function() {
  it('Show All Users', function (done) {
    chai.request(url)
      .put('/user')
      .end(function(err, res){
        //expect(res).to.be.json
        expect(res).to.have.status(200)
        done()
      })
  })
});
