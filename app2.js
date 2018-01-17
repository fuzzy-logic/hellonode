const restify = require('restify');
const server = restify.createServer();

var PORT = process.env['PORT'] || 3005;

server.get('/env', (request, response) => {
  console.log('nodzure: GET /env');
  var data = {err: {}};
  var text = 'hello world';
  /*
  data['PORT'] = PORT;
  var errs = 0;
  for (key in process.env) {
    try {
      data[key] = process.env[key];
      throw new Error('blah');
    } catch (err) {
      console.log('error: ' + err.message);
      errs++;
      data.err[errs] = {message: err.message, stack: err.stack};
    }
  }
  */
  response.header('Content-Type', 'application/json');
  response.header('Content-Type', 'text/plain');
  response.send(200, text);
});


server.listen(PORT, () => console.log('nodzure running http://host:' +PORT + '/'));
