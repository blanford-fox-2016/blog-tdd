'use strict'
const chai = require('chai');
const chaiHttp = require('chai-http');
const faker = require('faker');
const expect = chai.expect
const urlApi = 'http://localhost:3000/api'
chai.use(chaiHttp);

// CRUD ROUTE TEST

describe('Route post article', function() {
    let newTitle = faker.lorem.sentence()
    let newContent = faker.lorem.sentences()
    it('expect to return new posted article title and content', function(done) {
        chai.request(urlApi)
            .post('/article')
            .send({
                title: newTitle,
                content: newContent
            })
            .end(function(req, res) {
                expect(res.body.title).to.be.equal(newTitle)
                expect(res.body.content).to.be.equal(newContent)
                done()
            })
    })
})


describe('Route get article', function() {
    it('expect to return list of articles', function(done) {
            chai.request(urlApi)
                .get('/article')
                .end(function(err, res) {
                    expect(res.body.message).to.be.equal("List article")
                    done()
                }) // chai
        }) // it
})


describe('Route put article', function() {
        let putId = 7
        let newTitle = faker.lorem.sentence()
        let newContent = faker.lorem.sentences()
        it('expect to return new article title and content', function(done) {
            chai.request(urlApi)
                .put(`/article/${putId}`)
                .send({
                    title: newTitle,
                    content: newContent
                })
                .end(function(err, res) {
                    expect(res.body.title).to.be.equal(newTitle)
                    expect(res.body.content).to.be.equal(newContent)
                    done()
                })
        })
    })
    //
describe('Route delete article', function() {
    let delId = 7
    it('expect to return delete message', function(done) {
        chai.request(urlApi)
            .delete(`/article/${delId}`)
            .end(function(err, res) {
                expect(res.body.message).to.be.equal(`Article Deleted Successfully`)
                done()
            })
    })
})

// REGISTER NEW USER
describe('Route post Register new User', function() {
    let newName = 'aaaa'
    let newUsername = 'aaaa'
    let newPassword = 'aaaa'
    it('expect to return new user name and status 200', function(done) {
        chai.request(urlApi)
            .post('/register')
            .send({
                name: newName,
                username: newUsername,
                password: newPassword
            })
            .end(function(err, res) {
                expect(res.body.name).to.be.equal(newName)
                expect(res.body.username).to.be.equal(newUsername)
                expect(res.body.message).to.be.equal(`register success`)
                done()
            })
    })
})

describe('Route Login Process', function() {
    let newName = 'aaaa'
    let newUsername = `aaaa`
    let newPassword = `aaaa`
    it('expect username from login = username from database', function(done) {
        chai.request(urlApi)
            .post('/login')
            .send({
                username: newUsername,
                password: newPassword
            })
            .end(function(req, res) {
                expect(res.body.username).to.be.equal(newUsername)
                expect(res.body.name).to.be.equal(newName)
                done()
            })
    })
})
