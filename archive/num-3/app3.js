const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3000;

const server = http.createServer((req, res) => {
  console.log("server request ")

  res.setHeader(
    'Content-type',
    'text/html'
    // 'application/json'
  );

  const createPath = (page) => path.resolve(__dirname, "views", `${page}.html`);

  let basePath = '';

  switch (req.url) {
    case '/':
    case '/home':
    case '/index.html':
      basePath = createPath("index");
      res.statusCode = 200;
      break;
    case '/ebout-us':
      res.statusCode = 301;
      res.setHeader('Location', '/contacts');
      res.end();
      break;

    case '/contacts':
      basePath = createPath("contacts");
      res.statusCode = 200;
      break;
    default:
      basePath = createPath('error');
      res.statusCode = 404;

      break;
  }

  fs.readFile(basePath, (error, data) => {
    if (error) {
      console.log(error);
      res.statusCode = 500;
      res.end()
    } else {
      res.write(data);
      res.end()
    }
  })



  // res.write("<head><link rel='stylesheet' href='#'></head>")
  // res.write('<h3>Hello, my world!!!</h3>');
  // res.write('<p>My name is Vasiliy</p>');

  // const data = JSON.stringify([
  //   { name: "Tommy", age: 28 },
  //   { name: "John", age: 45 },
  //   {name: 'Artur', age: 24},
  // ])

  // res.end(data)

});

server.listen(PORT, "localhost", (error) => {
  error ? console.log(error) : console.log(`Listener port: ${PORT}`)
});

