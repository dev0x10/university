'use strict';

const Package = require('../package.json');

const internals = {
  response: {
    version: Package.version
  }
};

exports.register = (server, options, next) => {
  server.route({
    method: 'GET',
    path: '/version',
    config: {
      description: '',
      handler: (request, reply) => {
        reply({version: Package.version});
      }
    }
  });

  next();
};

exports.register.attributes = {
  name: 'version'
};