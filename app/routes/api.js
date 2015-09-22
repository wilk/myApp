var express = require('express'),
    router = express.Router(),
    usersCtrl = require('../controllers/users');

router.route('/users')
    .get(usersCtrl.list)
    .post(usersCtrl.create);

router.route('/users/:user')
    .get(usersCtrl.single)
    .patch(usersCtrl.update)
    .delete(usersCtrl.delete);

module.exports = router;
