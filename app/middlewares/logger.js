var logger = require('../utils/logger');

module.exports = function (req, res, next) {
    logger.info([req.method, req.url, req.ip].join(' '));

    next();
};
