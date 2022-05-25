const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to Home");
  } else if (req.url === "/about") {
    res.end("Welcome to About");
  } else res.end("<h1>Oops!</h1>");
});

server.listen(5000);
