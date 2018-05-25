/**
 * this file is entry-point for docker container pm2 in production
 */

const app = require('./app').app;

const server = app.listen(process.env.PORT || 3000, function () {
  const host = server.address().address;
  const port = server.address().port;

  console.log('Server listen at:', host, port)
});
