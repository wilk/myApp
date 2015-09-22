var logger = require('../utils/logger');

function UsersCtrl() {
    var me = this;

    me.list = function () {};
    me.single = function () {};

    me.create = function (req, res) {
        var user = {
            id: 10,
            name: req.body.name,
            email: req.body.email
        };

        logger.info('UsersCtrl::create');

        res.json(user);
    };

    me.update = function () {};
    me.delete = function () {};
}

module.exports = new UsersCtrl();
