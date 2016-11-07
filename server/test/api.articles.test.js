const chai = require('chai')
const assert = chai.assert
const chaiHTTP = require('chai-http')
chai.use(chaiHTTP)
const should = chai.should()

const url = 'http://localhost:3000'
/*
  * will test GET /api/users
  * should return (200) status code
  ** must be in format JSON
*/
describe('Get all articles from database', (done) => {
  it('it should return all articles from database', () => {
    chai.request(url)
      .get('/api/articles')
      .end((err, res) => {
        res.should.be.json
        res.should.have.status(200)
        done()
      })
  })
})

/*
  * will test POST /api/articles
  * should return (200) status code
  ** must be in format JSON
  ** respond content body should be same with the content value that sent (POST)
*/
describe('Add a new article into database', (done) => {
  it('it should add new article', (done) => {
    chai.request(url)
      .post('/api/articles')
      .send({
        "content" : "content from testing"
      })
      .end((err, res) => {
        res.should.be.json
        res.should.have.status(200)
        res.body.content.should.equal("content from testing")
        done()
      })
  })
})

/*
  * will test PUT /api/articles/:id
  * should return (200) status code
  ** must be in format JSON
  ** respond content body should be same with the content value that sent (PUT)
*/
describe('Updated a specific article based on id', (done) => {
  let id = 1
  it('it should update a specific article', () => {
    chai.request(url)
      .put('/api/articles/' + id)
      .send({
        "content" : "edit content from testing"
      })
      .end((err, res) => {
        res.should.be.json
        res.should.have.status(200)
        res.body.content.should.equal("edit content from testing")
        done()
      })
  })
})

/*
  * will test DELETE /api/articles
  * should return (200) status code
  ** must be in format JSON
  ** respond content body should be same with the content value that deleted (DELETE)
*/
describe('Deleted a specific article based on id', (done) => {
  let id = 1
  it('it should delete a specific article', () => {
    chai.request(url)
      .delete('/api/articles/' + id)
      .end((err, res) => {
        res.should.be.json
        res.should.have.status(200)
        res.body._id.should.equal(id)
        done()
      })
  })
})
