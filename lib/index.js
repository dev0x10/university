const Hapi = require('hapi');
const Package = require('./package.json');
const internals = {};

internals.init = () => {
  const server = new Hapi.Server();
  server.connection({port: 8000});

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

  server.start((err) => {
    Hoek.assert(!err, err);
    console.log('Server started at: ' + server.info.uri);
  });
};

internals.init();