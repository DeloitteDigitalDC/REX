'use strict';
/* istanbul ignore */
var assert  = require('assert'),
    request = require('supertest'),
    app     = require('../../app');

describe('GET /fda/drug/event.json', function () {

  it('should respond with JSON array', function (done) {
    request(app)
      .get('/fda/drug/event.json')
      .expect('Content-Type', /json/)
      .expect(200)
      .end(function (err, res) {
        if (err) {
          return done(err);
        }

        assert(res.body.length > 0);

        done();
      });
  });

});
