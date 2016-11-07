'use strict'

var chai = require('chai'),
    expect = chai.expect,
    should = chai.should(),
    chaiHttp = require('chai-http')


chai.use(chaiHttp)

it("Successfully display blogs", function(done) {
    chai.request('http://localhost:3000')
        .get('/blogs/list')
        .end(function(err, res) {
            res.should.be.status(200)
            done()
        })

})
it("Blog succesfully created", function(done) {
    chai.request('http://localhost:3000')
        .post('/blogs/create')
        .send({ title: "abc", body: "defghijklmnopqrstuvwxyz" })
        .end(function(err, res) {
            res.should.be.status(200)
            done()
        })
})
it("Blog succesfully deleted", function(done) {
    chai.request('http://localhost:3000')
        .delete('/blogs/delete')
        .end(function(err, res) {
            res.body.message.should.be.equal("delete success")
            done()
        })
})
it("Blog succesfully updated", function(done) {
    chai.request('http://localhost:3000')
        .post('/blogs/update')
        .end(function(err, res) {
            res.body.message.should.be.equal("update success")
            done()
        })
})