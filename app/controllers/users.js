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

    me.single = function () {};
    me.create = function () {};
    me.update = function () {};
    me.delete = function () {};
}

module.exports = new UsersCtrl();
