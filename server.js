const jsonServer = require("json-server");
const server = jsonServer.create();
const routerr = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3000;

console.log(server);

server.use(middlewares);
server.use(routerr);
server.listen(port, () => {
  console.log(`JSON Server está rodando na porta ${port}`);
});
