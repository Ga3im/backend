const http = require("http");
const getUsers = require("./modules/users");
const port = 3003;
const ipAddress = "http://127.0.0.1";

const server = http.createServer((request, responce) => {
  if (request.url === "/users") {
    responce.status = 200;
    responce.statusMessage = "OK";
    responce.header = "Content-Type: application/json";
    responce.write(getUsers());
    responce.end();
    return;
  }
  if (request.url === `/?hello`) {
    responce.status = "400";
    responce.statusMessage = "Bad Request";
    responce.header = "Content-Type: text/plain";
    responce.write(`Enter a name`);
    responce.end();
    return;
  }
  if (request.url === '/') {  
    responce.status = "200";
    responce.statusMessage = "OK";
    responce.header = "Content-Type: text/plain";
    responce.write(`Hello World`);
    responce.end();
    return
  }
  const urll = new URL(request.url, "http://http://127.0.0.1");
  const userName = urll.searchParams.get("hello");
  console.log(userName);
  responce.status = 200;
  responce.statusMessage = "OK";
  responce.header = "Content-Type: text/plain";
  responce.write(`Hello ${userName}`);
  responce.end();
 
});

server.listen(port, () => {
  console.log("Сервер запущен по адресу http://127.0.0.1:" + port);
});
