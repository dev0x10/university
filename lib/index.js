const Hapi = require('hapi');
const internals = {};
const version = require('./version');

internals.init = () => {
  const server = new Hapi.Server();
  server.connection({port: 8000});

  server.register(version, (err) => {

    Hoek.assert(!err, err);
    server.start((err) => {

      Hoek.assert(!err, err);
      console.log('Server started at: ' + server.info.uri);
    });
  });

};

internals.init();