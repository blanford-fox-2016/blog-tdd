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
describe.skip('Get all articles from database', function(){
  it('it should return all articles from database', function(done){
    chai.request(url)
      .get('/api/articles')
      .end(function(err, res){
        console.log(res.body);
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
describe.skip('Add a new article into database', function(){
  it('it should add new article', function(done){
    chai.request(url)
      .post('/api/articles')
      .send({
        "content" : "new content from testing"
      })
      .end(function(err, res){
        res.should.be.json
        res.should.have.status(200)
        res.body.content.should.equal("new content from testing")
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
describe.skip('Updated a specific article based on id', function(){
  let id = '58204b0d32682815ae86c615'
  it('it should update a specific article', function(done){
    chai.request(url)
      .put('/api/articles/' + id)
      .send({
        "content" : "edit content from testing"
      })
      .end(function(err, res){
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
describe('Deleted a specific article based on id', function(){
  let id = '58204b166c9c7a15b549e685'
  it('it should delete a specific article', function(done){
    chai.request(url)
      .delete('/api/articles/' + id)
      .end(function(err, res){
        res.should.be.json
        res.should.have.status(200)
        res.body._id.should.equal(id)
        done()
      })
  })
})
