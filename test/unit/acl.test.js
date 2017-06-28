'use strict';

const {app, expect, request} = require('../common');

describe('ACL', () => {
  describe('Category', () => {
    it('should return 200 when listing Categories', () => {
      return request
        .get('/api/Categories')
        .expect(200);
    });
  });

  describe('Product', () => {
    it('should return 200 when listing Products', () => {
      return request
        .get('/api/Products')
        .expect(200);
    });

    // it('should return 200 when listing Products', () => {
    //   return request
    //     .post('/api/Products')
    //     .send({name: 'Luke', price: 1000})
    //     .expect(401);
    // });
  });
});
