'use strict';

const Promise = require('bluebird');

module.exports = function(app, cb) {
  const AccessToken = app.models.AccessToken;
  const User = app.models.User;

  const email = 'admin@example.com';
  const password = 'secr3t';
  const accessToken = 'secr3t';

  return Promise.resolve()
    .then(() => User.findOne({where: {email}}))
    .then(res => (res ? res : User.create({email, password})))
    .then(user => AccessToken.upsert({id: accessToken, userId: user.id}))
    .then(token => console.log('Access token: ', token.id))
    .asCallback(cb);
};
