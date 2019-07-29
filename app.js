var http = require('http');

var PORT = process.env['PORT'] || 8089;

console.log('hellonode server running http://host:' +PORT + '/');


var server = http.createServer(function(req, res) {
  console.log('hellonode: GET /');
  res.writeHead(200);
  res.end('Hello World Fifth!: PORT=' + PORT);
});
server.listen(PORT);
