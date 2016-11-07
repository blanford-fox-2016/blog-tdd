const app = require('../app')
const mongoose = require('mongoose')
const User = require('../models/user')

const mocha = require('mocha')
const chai = require('chai')
const chaiHttp = require('chai-http')
const expect = chai.expect

chai.use(chaiHttp)

describe("Test if create Blog works", function () {

    beforeEach(function (done) {
        chai.request(app)
            .get('/api/blog/seed')
            .end(function (err, res) {
                console.log("seeded")
                done()
            })
    })

    afterEach(function (done) {
        chai.request(app)
            .delete('/api/blog/delete')
            .end(function (err, res) {
                done()
            })
    })

    it("expect to return list of blog posts", function (done) {
        chai.request(app)
            .get('/api/blog')
            .end(function (err, res) {
                console.log(res.body)
                expect(res).to.have.status(200)
                expect(res.body[0].title).to.equal('title a')
                expect(res.body[0].description).to.equal('description a')
                done()
            })
    })

    // it.skip("Return true if create blog works", function (done) {
    //     chai.request(app)
    //         .post('/api/blog/create')
    //         .field('_method', 'POST')
    //         .field('title', 'title create')
    //         .field('description', 'description create')
    //         .end(function (err, res) {
    //             console.log(res.body)
    //             expect(res).to.have.status(200)
    //             expect(res.body.title).to.be.equal('title create')
    //             expect(res.body.description).to.be.equal('description create')
    //             done()
    //         })
    // })
})