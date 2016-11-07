const app = require('../app')
const mongoose = require('mongoose')
const User = require('../models/user')

const mocha = require('mocha')
const chai = require('chai')
const chaiHttp = require('chai-http')
const expect = chai.expect

chai.use(chaiHttp)

// describe("Test if local register works", function () {
//
//     afterEach(function () {
//         chai.request(app)
//             .delete('/api/user?username=admin')
//     })
//
//     it("Return true if local register works", function () {
//         chai.request(app)
//             .post('/api/register')
//             .field('name', 'admin')
//             .field('username', 'admin')
//             .field('password', 'testing')
//             .field('email', 'admin@admin.com')
//             .end(function (err, res) {
//                 expect(res).to.have.status(200)
//                 expect(res.name).to.be.equal('admin')
//             })
//     })
// })