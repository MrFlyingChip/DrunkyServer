const product = require('../models/product');

module.exports.fetchProduct = function (req, res, db){
    const productId = req.params['id'];
    const productName = req.params['product'].toString();
    const userId = req.query['userId'];
    product.fetchProductInfo(db, productName, productId, userId)
        .then(value => {
            res.send(value);
        })
        .catch(error => {
            res.send({error: error.message});
        })
};

module.exports.findProduct = function (req, res, db){
    const productId = req.params['id'];
    const productName = req.params['product'].toString();
    product.findProduct(db, productName, productId)
        .then(value => {
            res.send(value);
        })
        .catch(error => {
            res.send({error: error.message});
        })
};

module.exports.addProduct = function (req, res, db) {
    const productObj = req.body['product'];
    const image = req.file.originalname;
    const productName = req.params['product'];
    productObj.image = image;
    product.addNewProduct(db, productName, productObj)
        .then(value => {
            res.send(value);
        })
        .catch(error => {
            res.send({error: error.message});
        })
};

module.exports.fetchAllProducts = function (req, res, db) {
    const productName = req.params['product'];
    product.fetchAllProducts(db, productName)
        .then(value => {
            res.send(value);
        })
        .catch(error => {
            res.send({error: error.message});
        })
};

module.exports.deleteProduct = function (req, res, db) {
    const productName = req.params['product'];
    const productId = req.params['id'];
    product.deleteProduct(db, productName, productId)
        .then(value => {
            res.send(value);
        })
        .catch(error => {
            res.send({error: error.message});
        })
};

module.exports.updateProduct = function (req, res, db) {
    const productObj = req.body['product'];
    const productName = req.params['product'];
    const productId = req.params['id'];
    productObj.image = (req.file) ? req.file.originalname : productObj.image;
    product.updateProduct(db, productName, productObj, productId)
        .then(value => {
            res.send(value);
        })
        .catch(error => {
            res.send({error: error.message});
        })
};