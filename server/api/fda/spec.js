var assert  = require('assert'),
    request = require('supertest'),
    app     = require('../../app');

describe('GET /api/foos', function() {

  it('should respond with JSON array', function(done) {
    request(app)
      .get('/fda/drug/event.json')
      .expect('Content-Type', /json/)
      .expect(200)
      .end(function(err) {
        if (err) return done(err);

        done();
      });
  });

});