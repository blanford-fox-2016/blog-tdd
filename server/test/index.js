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
                // console.log("seeded")
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
                // console.log(res.body)
                expect(res).to.have.status(200)
                expect(res.body[0].title).to.equal('title a')
                expect(res.body[0].description).to.equal('description a')
                done()
            })
    })

    it("Return true if create blog works", function (done) {
        chai.request(app)
            .post('/api/blog/create')
            .send({
                postId: '6',
                title: 'title create',
                description: 'description create'
            })
            .end(function (err, res) {
                expect(res).to.have.status(200)
                expect(res.body.title).to.equal('title create')
                expect(res.body.description).to.equal('description create')
                done()
            })
    })

    it("Return true if delete blog works", function (done) {
        chai.request(app)
            .delete('/api/blog/delete/1')
            .end(function (err, res) {
                expect(res).to.have.status(200)
                expect(res.body.title).to.equal('title a')
                expect(res.body.description).to.equal('description a')
                done()
            })
    })

    it("Return true if update blog works", function (done) {
        chai.request(app)
            .put('/api/blog/update/1')
            .send({
                postId: '7',
                title: 'title update',
                description: 'description update'
            })
            .end(function (err, res) {
                expect(res).to.have.status(200)
                expect(res.body.title).to.equal('title update')
                expect(res.body.description).to.equal('description update')
                done()
            })
    })
})