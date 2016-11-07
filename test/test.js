'use strict'
const mocha = require('mocha')
const app = require('../app')
const chai = require('chai')
const chaiHttp = require('chai-http')
const assert = chai.assert
const expect = chai.expect
const should = chai.should()

chai.use(chaiHttp)

describe('endpoint', function() {

  it('show all user', function(done) {
    chai.request('http://localhost:3000')
    .get('/api/blog')
    .end(function(err, res) {
      expect(res).to.have.status(200)
      expect(res).to.be.json
      done()
    })
  })

  it('delete blog by id', function(done) {
    chai.request('http://localhost:3000')
    .delete('/api/blog/5820452dccc2a211f3054872')
    .end(function(err, res) {
      expect(res).to.have.status(200)
      expect(res).to.be.json
      done()
    })
  })

  it('update blog by id', function(done) {
    chai.request('http://localhost:3000')
    .put('/api/blog/5820432c6ef0f2117917578b')
    .send({
      title: 'apaupdate',
      content:"ituu",
      postId:"123ss"
    })
    .end(function(err, res) {
      expect(res).to.have.status(200)
      expect(res).to.be.json
      done()
    })
  })

  it('create new blog ', function(done) {
    chai.request('http://localhost:3000')
    .post('/api/blog')
    .send({
      title: 'apa',
      content:"ituu",
      postId:"123"
    })
    .end(function(err, res) {
      expect(res).to.have.status(200)
      expect(res).to.be.json
      done()
    })
  })






})
