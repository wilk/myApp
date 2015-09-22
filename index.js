var config = require('config'),
    server = require('./app/app'),
    logger = require('./app/utils/logger');

server.listen(config.express.port, function () {
    logger.info('Server listening on port', config.express.port);
});