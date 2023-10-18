const http = require('http');
const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

const hostname = '127.0.0.1';
const port = 3000;

const xhr = new XMLHttpRequest();
let data = {};

xhr.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    data.data = this.responseText;
  }
};

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  xhr.open('GET', 'http://jsonplaceholder.typicode.com/todos/1');
  xhr.send();
  res.end(JSON.stringify(data));
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
