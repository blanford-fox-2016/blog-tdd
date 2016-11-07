const chai = require('chai')
const chaiHTTP = require('chai-http')
chai.use(chaiHTTP)
const should = chai.should()

const url = 'http://localhost:3000'
/*
  * will test GET /api/users
  * should return (200) status code
  ** must be in format JSON
*/
// describe('Get all users from database', (done) => {
//   it('it should return all users from database', () => {
//     chai.request(url)
//       .get('/api/users')
//       .end((err, res) => {
//         // console.log(res.body);
//         res.should.be.json
//         res.should.have.status(200)
//         done()
//       })
//   })
// })

/*
  * will test POST /api/users
  * should return (200) status code
  ** must be in format JSON
  ** respond content body should be same with the content value that sent (POST)
*/
describe('Add a new user into database', (done) => {
  it('it should add new user', (done) => {
    chai.request(url)
      .post('/api/users')
      .send({
        "username" : "admin",
        "password" : "admin"
      })
      .end((err, res) => {
        res.should.be.json
        res.should.have.status(200)
        res.body.username.should.equal("admin")
        res.body.password.should.equal("admin")
        done()
      })
  })
})

/*
  * will test PUT /api/users/:id
  * should return (200) status code
  ** must be in format JSON
  ** respond content body should be same with the content value that sent (PUT)
*/
// describe('Updated a specific user based on id', (done) => {
//   let id = 1
//   it('it should update a specific user', () => {
//     chai.request(url)
//       .put('/api/users/' + id)
//       .send({
//         "username" : "admin123",
//         "password" : "admin123"
//       })
//       .end((err, res) => {
//         res.should.be.json
//         res.should.have.status(200)
//         res.body.username.should.equal("admin123")
//         res.body.password.should.equal("admin123")
//         done()
//       })
//   })
// })

/*
  * will test DELETE /api/users
  * should return (200) status code
  ** must be in format JSON
  ** respond content body should be same with the content value that deleted (DELETE)
*/
// describe('Deleted a specific user based on id', (done) => {
//   let id = 1
//   it('it should delete a specific user', () => {
//     chai.request(url)
//       .delete('/api/users/' + id)
//       .end((err, res) => {
//         res.should.be.json
//         res.should.have.status(200)
//         res.body._id.should.equal(id)
//         done()
//       })
//   })
// })
