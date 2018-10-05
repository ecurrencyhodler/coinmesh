const app = require('../../../app');
const service = require('ln-service/service');
const request = require('supertest');

describe('Connections', () => {
  describe('/v0/connections/', () => {
    it('responds', (done) => {
      let url = `/v0/connections/`;

      request(app)
        .get(url)
          .set('Authorization', 'Basic cnBjdXNlcjpycGNwYXNzd29yZA==')
          .expect(200)
          .end(function(err, res) {
            expect(Array.isArray(res.body.connections)).toBe(true);
            if (err) throw err;
            done();
          });
    });
  });
});
