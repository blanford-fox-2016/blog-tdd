'use strict'


const mocha = require('mocha')
const chai = require('chai')
const expect = chai.expect
const chaiHttp = require('chai-http')
chai.use(chaiHttp)

// local dipendencies
const url = 'http://localhost:3000'
const User = require('../models/user.server.model');
let mongoose = require("mongoose")


describe('Blogs', () => {
    beforeEach((done) => {
        User.remove({}, (err) => { //empty database
            done()
        })
    })

    describe('/GET user', () => {
        //this.timeout(5000)
        it('it should GET all blogs', (done) => {
            chai.request(url)
                .get('/api/users')
                .end((err, res) => {
                    res.should.have.status(200)
                    res.body.should.be.a('array')
                    res.body.length.should.be.eql(0)
                    done()
                })
        })
    })
  })

// // Testig the server in root directory
// describe('Server Checking', function() {
//   it('Check the server', function(done) {
//     //this.timeout(3000)
//     chai.request(url)
//       .get('/')
//       .end(function(err, res) {
//         expect(res).to.have.status(200)
//         done()
//       })
//   })
// });
//
// // Try to register user and check it
// describe('Register User', function() {
//   it('Register User Given Unexisted Username', function (done) {
//     chai.request(url)
//       .post('/user')
//       .send({
//         username : 'kembalian',
//         name : 'dl',
//         password: 'kambing'
//       })
//       .end(function(err, res){
//         console.log(res.body);
//         expect(res).to.have.status(200)
//         //expect(res).to.have.property('password')
//         done()
//       })
//   })
//
// });
//
//
// // Get all user from database
//
// describe('Get all user from database', function() {
//   it('Show All Users', function (done) {
//     chai.request(url)
//       .get('/user')
//       .end(function(err, res){
//         expect(res).to.be.json
//         expect(res).to.have.status(200)
//         done()
//       })
//   })
// });
//
// //Update the user
//
// describe.skip('Update the user from database', function() {
//   it('Show All Users', function (done) {
//     chai.request(url)
//       .put('/user')
//       .end(function(err, res){
//         //expect(res).to.be.json
//         expect(res).to.have.status(200)
//         done()
//       })
//   })
// });



/////////===============================
//
// process.env.NODE_ENV = 'test'
//
// let mongoose = require("mongoose")
// let Blog = require('../app/models/blog')
//
// let chai = require('chai')
// let chaiHttp = require('chai-http')
// let server = require('../server')
// let should = chai.should()
//
// chai.use(chaiHttp)
//
// describe('Blogs', () => {
//     beforeEach((done) => {
//         Blog.remove({}, (err) => { //empty database
//             done()
//         })
//     })
//
//     describe('/GET blog', () => {
//         it('it should GET all blogs', (done) => {
//             chai.request(server)
//                 .get('/blog')
//                 .end((err, res) => {
//                     res.should.have.status(200)
//                     res.body.should.be.a('array')
//                     res.body.length.should.be.eql(0)
//                     done()
//                 })
//         })
//     })
//
//     describe('/POST blog', () => {
//         it('it should not POST a blog without postedBy field', (done) => {
//             let blog = {
//                 title: "Hellow",
//                 content: "Hellow how are yu?"
//             }
//             chai.request(server)
//                 .post('/blog')
//                 .send(blog)
//                 .end((err, res) => {
//                     res.should.have.status(200)
//                     res.body.should.be.a('object')
//                     res.body.should.have.property('errors')
//                     res.body.errors.should.have.property('postedBy')
//                     res.body.errors.postedBy.should.have.property('kind').eql('required')
//                     done()
//                 })
//         })
//
//         it('it should POST a blog ', (done) => {
//             let blog = {
//                 title: "test",
//                 content: "wow",
//                 postedBy: "sahbana"
//             }
//             chai.request(server)
//                 .post('/blog')
//                 .send(blog)
//                 .end((err, res) => {
//                     res.should.have.status(200)
//                     res.body.should.be.a('object')
//                     res.body.should.have.property('message').eql('Blog successfully added!')
//                     res.body.blog.should.have.property('title')
//                     res.body.blog.should.have.property('content')
//                     res.body.blog.should.have.property('postedBy')
//                     done()
//                 })
//         })
//     })
//
//     describe('/GET/:id blog', () => {
//         it('it should GET a blog given the id', (done) => {
//             let blog = new Blog({ title: "Ini test title", content: "Ini test content", postedBy: "ari" })
//             blog.save((err, blog) => {
//                 chai.request(server)
//                     .get('/blog/' + blog.id)
//                     .send(blog)
//                     .end((err, res) => {
//                         res.should.have.status(200)
//                         res.body.should.be.a('object')
//                         res.body.should.have.property('title')
//                         res.body.should.have.property('content')
//                         res.body.should.have.property('postedBy')
//                         res.body.should.have.property('_id').eql(blog.id)
//                         done()
//                     })
//             })
//
//         })
//     })
//
//     describe('/PUT/:id blog', () => {
//         it('it should UPDATE a blog given the id', (done) => {
//             let blog = new Blog({ title: "eneh test title", content: "eneh test content", postedBy: "septhianto" })
//             blog.save((err, blog) => {
//                 chai.request(server)
//                     .put('/blog/' + blog.id)
//                     .send({ title: "gantee title", content: "gantee content", postedBy: "andrew" })
//                     .end((err, res) => {
//                         res.should.have.status(200)
//                         res.body.should.be.a('object')
//                         res.body.should.have.property('message').eql('Blog updated!')
//                         res.body.blog.should.have.property('postedBy').eql("andrew")
//                         done()
//                     })
//             })
//         })
//     })
//
//     describe('/DELETE/:id blog', () => {
//         it('it should DELETE a blog given the id', (done) => {
//             let blog = new Blog({ title: "eneh title", content: "eneh content", postedBy: "lilianti" })
//             blog.save((err, blog) => {
//                 chai.request(server)
//                     .delete('/blog/' + blog.id)
//                     .end((err, res) => {
//                         res.should.have.status(200)
//                         res.body.should.be.a('object')
//                         res.body.should.have.property('message').eql('Blog successfully deleted!')
//                         res.body.result.should.have.property('ok').eql(1)
//                         res.body.result.should.have.property('n').eql(1)
//                         done()
//                     })
//             })
//         })
//     })
//
// })
