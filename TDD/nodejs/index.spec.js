const request = require('supertest');
const should = require('should');
const app = require('./index');

describe('GET /users는, ', () => {
  describe('성공 시', () => {
    it('유저 객체를 담은 배열로 응답한다. ', (done) => {
      request(app)
        .get('/users')
        .end((err, res) => {
          res.body.should.be.instanceOf(Array);
          done();
        });
    });
    it('최대 limit 갯수만큼 응답한다.', (done) => {
      request(app)
        .get('/users?limit=2')
        .end((err, res) => {
          res.body.should.have.lengthOf(2);
          done();
        });
    });
  });
});
