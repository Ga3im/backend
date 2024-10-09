const http = require("http");
const getUsers = require("./modules/users");
const hello = require("./modules/hello-module");
const port = 3003;

const server = http.createServer((request, responce) => {
  if (request.url === "/users") {
    responce.status = 200;
    responce.statusMessage = "OK";
    responce.header = "Content-Type: application/json";
    responce.write(getUsers())
    responce.end();
    return;
  }
  if (responce.status = 200) {
    responce.statusMessage = "OK";
    responce.header = "Content-Type: text/plain";
    responce.write(`Hello, .}`);
    responce.end();
  }
});

hello('this'
);

server.listen(port, () => {
  console.log("Сервер запущен по адресу http://127.0.0.1:" + port);
});
