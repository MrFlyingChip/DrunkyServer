const ObjectID = require('mongodb').ObjectID;
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