//sdfbsdf

const http = require('http');
  
const hostname = '0.0.0.0';
const port = 7000;


http.createServer((req, res) => {

res.writeHead(200, { 'Content-Type': 'text/plain' });

res.end('Olha nos aqui\n');

}).listen(port, hostname, () => {

console.log(`Server running at http://${hostname}:${port}/`);

});
