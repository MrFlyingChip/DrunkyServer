const productController = require('../controllers/productController');
const ingredientController = require('../controllers/ingredientController');
const toolController = require('../controllers/toolController');
const filterTypeController = require('../controllers/filterTypeController');

module.exports = function (app, db, upload) {
    //product admin routes
    app.get('/admin/:product', (req, res) => {
        productController.fetchAllProducts(req, res);
    });

    app.get('/admin/:product/:id', (req, res) => {
        productController.findProduct(req, res);
    });

    app.post('/admin/:product', upload.single('image'), (req, res) => {
        productController.addProduct(db, req, res);
    });

    app.put('/admin/:product/:id', upload.single('image'), (req, res) => {
        productController.updateProduct(db, req, res);
    });

    app.delete('/admin/:product/:id', (req, res) => {
        productController.deleteProduct(db, req, res);
    });

    //ingredient admin routes
    app.get('/admin/ingredient/:id', (req, res) => {
        ingredientController.fetchIngredient(db, req, res);
    });

    app.get('/admin/ingredient/all', (req, res) => {
        ingredientController.fetchAllIngredients(db, req, res);
    });

    app.post('/admin/ingredient', upload.single('image'), (req, res) => {
        ingredientController.createIngredient(db, req, res);
    });

    app.put('/admin/ingredient/:id', upload.single('image'), (req, res) => {
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

    app.post('/admin/tool', upload.single('image'), (req, res) => {
        toolController.createTool(db, req, res);
    });

    app.put('/admin/tool/:id', upload.single('image'), (req, res) => {
        toolController.updateTool(db, req, res);
    });

    app.delete('/admin/tool/:id', (req, res) => {
        toolController.deleteTool(db, req, res);
    });

    //filterType admin routes
    app.get('/admin/filterType/:id', (req, res) => {
        filterTypeController.fetchFilterType(db, req, res);
    });

    app.get('/admin/filterType/:product', (req, res) => {
        filterTypeController.fetchFilterTypeProduct(db, req, res);
    });

    app.post('/admin/filterType', upload.single('image'), (req, res) => {
        filterTypeController.createFilterType(db, req, res);
    });

    app.put('/admin/filterType/:id', upload.single('image'), (req, res) => {
        filterTypeController.updateFilterType(db, req, res);
    });

    app.delete('/admin/filterType/:id', (req, res) => {
        filterTypeController.deleteFilterType(db, req, res);
    });

    //filter admin routes
    app.get('/admin/filter/:id', (req, res) => {
        filterTypeController.fetchFilter(db, req, res);
    });

    app.get('/admin/filters/:id', (req, res) => {
        filterTypeController.fetchFiltersFilterType(db, req, res);
    });

    app.post('/admin/filter', upload.single('image'), (req, res) => {
        filterTypeController.createFilter(db, req, res);
    });

    app.put('/admin/filter/:id', upload.single('image'), (req, res) => {
        filterTypeController.updateFilter(db, req, res);
    });

    app.delete('/admin/filter/:id', (req, res) => {
        filterTypeController.deleteFilter(db, req, res);
    });
};