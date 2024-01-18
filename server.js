const jsonServer = require('json-server');
const { PORT } = require('./src/api/update-current-asset');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);
server.listen(PORT, () => {
    console.log('JSON Server is running');
});
