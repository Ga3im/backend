const http = require("http");
const getUsers = require('./modules/users')
const port = 3003;

const server = http.createServer((request, responce) => {
  if (request.url === "/users") {
    responce.status = 200;
    responce.statusMessage = "OK";
    responce.header = "Content-Type: application/json";
    responce.write(getUsers());
    responce.end();
    return;
  }

  responce.status = 200;
  responce.statusMessage = "OK";
  responce.header = "Content-Type: text/plain";
  responce.write("Hello, world");
  responce.end();
});

server.listen(port, () => {
  console.log("Сервер запущен по адресу http://127.0.0.1:"+ port);
});
