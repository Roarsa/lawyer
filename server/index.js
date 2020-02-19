global.RUNTIME_ENV = 'server';

const server = require('./server');
const applyMiddlewares = require('./middlewares');
const applyRouter = require('./mailer');

//server(process.env.PORT, applyMiddlewares, applyRouter);
server(8001, applyMiddlewares, applyRouter);
