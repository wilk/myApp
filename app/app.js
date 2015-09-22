var express = require('express'),
    server = express(),
    apiRouter = require('./routes/api'),
    bodyParser = require('body-parser'),
    loggerMiddleware = require('./middlewares/logger'),
    errorMiddleware = require('./middlewares/error');

server.use(loggerMiddleware);
server.use(bodyParser.json());
server.use('/api', apiRouter);
server.use(errorMiddleware);

module.exports = server;
