const drunkyRoutes = require('./drunky_routes');
const adminRoutes = require('./admin_routes');
const userRoutes = require('./user_routes');

module.exports = function (app, db, upload) {
    drunkyRoutes(app, db, upload);
};