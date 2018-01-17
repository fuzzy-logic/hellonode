var http = require('http');


var PORT = process.env['PORT'] || 3005;

console.log('nodzure running http://host:' +PORT + '/');


var server = http.createServer(function(req, res) {
  console.log('nodzure: GET /');
  res.writeHead(200);
  res.end('Hello Http: PORT=' + PORT);
});
server.listen(PORT);
