const config = require('./src/config');
const createServer = require('./src/create-server');

const server = createServer(config);

server.start();
