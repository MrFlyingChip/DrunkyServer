const product_controller = require('../controllers/product_controller');

module.exports = function (app, db, upload) {
    app.route('/admin/:product', upload.single('image'))
        .post((req, res) => {
            product_controller.addProduct(req, res, db);
        })
        .put((req, res) => {

        })
        .delete((req, res) => {

        });

    app.route('/admin/tool', upload.single('image'))
        .post((req, res) => {

        })
        .put((req, res) => {

        })
        .delete((req, res) => {

        });

    app.route('/admin/tool', upload.single('image'))
        .post((req, res) => {

        })
        .put((req, res) => {

        })
        .delete((req, res) => {

        })
};