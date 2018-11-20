const product_controller = require('../controllers/product_controller');
const toolController = require('../controllers/toolController');
const ingredientController = require('../controllers/ingredientController');

module.exports = function (app, db, upload) {
  app.get('/:product/:id', function(req, res) {
    product_controller.fetchProduct(req, res, db)
  });
  app.get('/tool/:id', function (req, res) {
      toolController.fetchTool(db, req, res);
  });
  app.get('/ingredient/:id', function (req, res) {
      ingredientController.fetchIngredient(db, req, res);
  });
  app.get('/:product/:page', function (req, res) {
      //TODO: get products
  });
  app.get('/:product/popular/:page', function(req, res){
      //TODO get popular
  });
  app.get('/filters/:product', function (req, res) {
      //TODO get filters
  });
};