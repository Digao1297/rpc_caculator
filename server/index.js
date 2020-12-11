const WebSocketServer = require("rpc-websockets").Server;

const server = new WebSocketServer({
  port: 8080,
  host: "127.0.0.1",
});

server.register("add", (params) => {
  console.log(params);
  return params[0] + params[1];
});

server.register("sub", (params) => {
  console.log(params);
  return params[0] - params[1];
});

server.register("mult", (params) => {
  console.log(params);
  return params[0] * params[1];
});

server.register("div", (params) => {
  console.log(params);
  return params[0] / params[1];
});
