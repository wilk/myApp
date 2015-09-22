var logger = require('../utils/logger');

function UsersCtrl() {
    var me = this;

    me.list = function () {};

    me.single = function (req, res) {
        var user = req.params.user;
        logger.info('UsersCtrl::single');

        res.json({
            id: user,
            name: 'Wilk',
            email: 'vincenzo@ibuildings.it'
        });
    };

    me.create = function () {};
    me.update = function () {};
    me.delete = function () {};
}

module.exports = new UsersCtrl();
