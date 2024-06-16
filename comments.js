// Create web server
// Create a web server that listens for incoming requests and sends back responses. 
// The server should respond to requests to the /comments URL, and it should send back the comments array as a JSON response.

const http = require('http');

const comments = [
  { username: 'Tom', comment: 'I like JS the best' },
  { username: 'Sara', comment: 'JS is so cool' },
  { username: 'Aimee', comment: 'JS is ok, but I prefer Ruby' }
];

const server = http.createServer((req, res) => {
  if (req.url === '/comments' && req.method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(comments));
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not found');
  }
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});