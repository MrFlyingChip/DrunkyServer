const product_controller = require('../controllers/product_controller');
const ingredientController = require('../controllers/ingredientController');
const toolController = require('../controllers/toolController');

module.exports = function (app, db, upload) {
    app.route('/admin/:product', upload.single('image'))
        .post((req, res) => {
            product_controller.addProduct(req, res, db);
        })
        .put((req, res) => {

        })
        .delete((req, res) => {

        });

    //ingredient admin routes
    app.get('/admin/ingredient/:id', (req, res) => {
        ingredientController.fetchIngredient(db, req, res);
    });

    app.get('/admin/ingredient/all', (req, res) => {
        ingredientController.fetchAllIngredients(db, req, res);
    });

    app.post('/admin/ingredient', (req, res) => {
        ingredientController.createIngredient(db, req, res);
    });

    app.put('/admin/ingredient/:id', (req, res) => {
        ingredientController.updateIngredient(db, req, res);
    });

    app.delete('/admin/ingredient/:id', (req, res) => {
        ingredientController.deleteIngredient(db, req, res);
    });

    //tool admin routes
    app.get('/admin/tool/:id', (req, res) => {
        toolController.fetchTool(db, req, res);
    });

    app.get('/admin/tool/all', (req, res) => {
        toolController.fetchAllTools(db, req, res);
    });

    app.post('/admin/tool', (req, res) => {
        toolController.createTool(db, req, res);
    });

    app.put('/admin/tool/:id', (req, res) => {
        toolController.updateTool(db, req, res);
    });

    app.delete('/admin/tool/:id', (req, res) => {
        toolController.deleteTool(db, req, res);
    });
};