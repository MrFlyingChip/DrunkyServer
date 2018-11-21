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
            res.send(error);
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
            res.send(error);
        })
};