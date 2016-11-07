'use strict'

const mocha = require('mocha')
const chai = require('chai')
const expect = chai.expect
const chaiHttp = require('chai-http')
chai.use(chaiHttp)

const url = 'http://localhost:3000'


describe('Nodejs Checking', function() {
    it('Check the server', function(done) {
      this.timeout(3000)
      chai.request('http://localhost:3000/user')
        .get('/')
        .end(function(err, res) {
          expect(res).to.have.status(200)
          expect(res).to.be.json
          done()
        })
    })
    // it('Can post new user', () => {
    //   chai.request(url)
    //     .post('/api/users')
    //     .send({
    //       username : 'broerjuang',
    //       name : 'juang wiantoro',
    //       password : 'kambing'
    //     })
    //     .then(res => {
    //       expect(res).to.have.status(200)
    //       expect(res.body.username).to.equal('broerjuang')
    //       console.log(res.body.);
    //     })
    // });
  });
