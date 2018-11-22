const userController = require('../controllers/userController');

module.exports = function (app, db, upload) {
    app.post('/user/signUp', (req, res) => {
        userController.signUp(req, res, db);
    });

    app.post('/user/logIn', (req, res) => {
        userController.logIn(req, res, db);
    });

    app.post('/user/account', (req, res) => {
        userController.accountInfo(req, res, db);
    });
};