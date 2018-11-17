const product_controller = require('../controllers/product_controller');

module.exports = function (app, db, upload) {
    app.route('/admin/:product', upload.single('image'))
        .post((req, res) => {
            product_controller.addProduct(req, res, db);
        })
        .put((req, res) => {
            //user_controller.updateComment(req, res, db);
        })
        .delete((req, res) => {
            //user_controller.deleteComment(req, res, db);
        });
};