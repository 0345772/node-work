const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3002;

const server = http.createServer((req, res) => {

  res.setHeader('Content-Type', 'text/html');

  const createPath = (page) => path.resolve(__dirname, 'views', `${page}.html`);

  let basePath = "";

  switch (req.url) {
    case '/':
      basePath = createPath('index');
      res.statusCode = 200;
      break;
    case '/about-us':
      res.statusCode = 301;
      res.setHeader("Location", "/contacts");
      res.end();
      break;
    case '/contacts':
      basePath = createPath('contacts');
      statusCode = 200;
      break;
    default:
      basePath = createPath('error');
      statusCode = 404;
      break;

  }

  fs.readFile(basePath, (err, data) => {
    if (err) {
      console.log(err);
      statusCode = 500;
      res.end()
    }
    else {
      res.write(data);
      res.end()
    }
  })
 
})

server.listen(PORT, 'localhost', (err) => {
  err ? console.log(err) : console.log(`Listening port ${PORT}`)
}) 
