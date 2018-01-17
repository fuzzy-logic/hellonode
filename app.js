const restify = require('restify');
const server = restify.createServer();

var PORT = process.env['PORT'] || 3005;

server.get('/env', (req, res) => {
  console.log('nodzure: GET /env');
  var data = {};
  for (key in process.env) {
    try {
      data[key] = process.env[key];
    } catch (err) {
      console.log('error: ' + err.message);
    }
  }
  data['PORT'] = PORT;
  res.send(200, data);
});


server.listen(PORT, () => console.log('nodzure running http://host:' +PORT + '/'));
