var logger = require('../utils/logger');

function UsersCtrl() {
    var me = this;

    me.list = function (req, res) {
        logger.info('UsersCtrl:list');
        
        res.json([{
            id: 10,
            name: 'Wilk',
            email: 'vincenzo@ibuildings.it'
        }, {
            id: 20,
            name: 'foo',
            email: 'foo@foo.com'
        }]);
    };

    me.single = function (req, res) {
        var user = req.params.user;
        logger.info('UsersCtrl::single');

        res.json({
            id: user,
            name: 'Wilk',
            email: 'vincenzo@ibuildings.it'
        });
    };

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
