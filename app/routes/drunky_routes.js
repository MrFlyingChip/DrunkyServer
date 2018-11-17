const product_controller = require('../controllers/product_controller');
const user_controller = require('../controllers/user_controller');

module.exports = function (app, db, upload) {
  app.get('/:product/:id', function(req, res) {
    product_controller.fetchProduct(req, res, db)
  });
  app.route('/:product/:id/comment')
    .post((req, res) => {
      user_controller.addComment(req, res, db);
    })
    .put((req, res) => {
      user_controller.updateComment(req, res, db);
    })
    .delete((req, res) => {
      user_controller.deleteComment(req, res, db);
    });
};