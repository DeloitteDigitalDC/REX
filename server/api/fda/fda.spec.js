'use strict';

var assert  = require('assert');

describe('GET /fda/drug/event', function () {

  it('should respond with JSON array', function (done) {
    request(app)
      .get('/fda/drug/event/')
      //.expect('Content-Type', /json/)
      .expect(200)
      .end(function (err, res) {
        if (err) {
          return done(err);
        }

        assert(res.body.results.length > 0);

        done();
      });
  });

});
