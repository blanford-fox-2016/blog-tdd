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
    it('expect to return json of new user and status 200', function(done) {
        chai.request('http://localhost:3000/api')
            .post('/article')
            .send({
                name: 'tevin',
                article: 'tevin article'
            })
            .end(function(req, res) {
                expect(res).to.have.status(200);
                expect(res).to.be.json;
                expect(res.body.article).to.be.equal("tevin article")
                done()
            })
    })
})

describe('Route put article', function() {
    it('expect to return json of ok:1 and status 200', function(done) {
        chai.request('http://localhost:3000/api')
            .put('/article/58202aa335eda6203ce75296')
            .send({
                name: 'yoni',
                article: 'yoni article'
            })
            .end(function(err, res) {
                expect(res).to.have.status(200);
                expect(res).to.be.json;
                expect(res.body.ok).to.be.equal(1)
                done()
            })
    })
})

describe('Route delete article', function() {
    it('expect to return json of ok:1 and status 200', function(done) {
        chai.request('http://localhost:3000/api')
            .delete('/article/58202aa335eda6203ce75296')
            .end(function(err, res) {
                expect(res).to.have.status(200);
                expect(res).to.be.json;
                expect(res.body.n).to.be.equal(1)
                done()
            })
    })
})
