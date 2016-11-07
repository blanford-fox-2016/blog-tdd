'use strict'
const chai = require('chai');
const chaiHttp = require('chai-http');
const expect = chai.expect

chai.use(chaiHttp);

describe('Route get article', function() {
    it('expect to return list of articles', function(done) {
            chai.request('http://localhost:3000/api')
                .get('/article')
                .end(function(err, res) {
                    expect(res).to.have.status(200)
                    expect(res).to.be.json
                    expect(res.body[0].article).to.be.equal("first article")
                    done()
                }) // chai
        }) // it
})

describe('Route post article', function() {
    it('should return json and status 200', function(done) {
        chai.request('http://localhost:3000/api')
            .post('/article')
            .field('name', 'tevin')
            .field('article', 'tevin article')
            .end(function(req, res) {
                expect(res).to.have.status(200);
                expect(req).to.be.json;
                expect(res.body.article).to.be.equal("tevin article")
                done()
            })
    })
})
