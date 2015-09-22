var logger = require('../utils/logger');

function UsersCtrl() {
    var me = this;

    me.list = function () {};
    me.single = function () {};
    me.create = function () {};

    me.update = function (req, res) {
        var user = {
            id: req.params.user,
            name: req.body.name,
            email: 'vincenzo@ibuildings.it'
        };

        logger.info('UsersCtrl:update');

        res.json(user);
    };

    me.delete = function () {};
}

module.exports = new UsersCtrl();
