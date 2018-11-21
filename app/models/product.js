const ObjectID = require('mongodb').ObjectID;
const user = require('./user');
const comment = require('./comment');
const productCreator = require('../creators/productCreator');

module.exports.fetchProductInfo = function (db, productName, productId, userId) {
    return new Promise((resolve, reject) => {
        let product = {};
        findProduct(db, productName, productId)
            .then(value => {
                product.product = value;
                return comment.fetchProductComments(productId, db);
            })
            .then(onComment => {
                product.comments = onComment;
                return Promise.all(product.comments.map(comment => {
                    return user.fetchUserForComment(db, comment.user);
                }));
            })
            .then(onUsers => {
                product.users = onUsers;
                if(userId){
                    return user.hasIdInArray(db, 'favouriteProducts', productId, userId);
                } else {
                    resolve(product);
                }
            })
            .then(onFavourites => {
                product.inFavourites = onFavourites;
                return user.hasIdInArray(db, 'likedProducts', productId, userId);
            })
            .then(onLikes => {
                product.inLikes = onLikes;
                resolve(product);
            })
            .catch(error => {
                reject(error);
            })
    });
};

module.exports.findProduct = function(db, product, productId){
    return new Promise((resolve, reject) => {
        db.collection(product).findOne({'_id': new ObjectID(productId)})
            .then(value => {
                if(value){
                    resolve(value);
                } else {
                    reject(new Error('no such product'));
                }
            })
            .catch(error => {
                reject(error);
            })
    });
};

module.exports.fetchAllProducts = function(db, product){
    return db.collection(product).find().toArray();
};

module.exports.addNewProduct = function (db, product, productObj) {
    return new Promise((resolve, reject) => {
        const newProduct = productCreator.createProduct(product, productObj);
        db.collection(product).insertOne(newProduct)
            .then(value => {
                resolve(value.ops[0]);
            })
            .catch(error => {
                reject(error);
            })
    });
};

module.exports.updateProduct = function (db, product, productObj, productId) {
    return new Promise((resolve, reject) => {
        const updatedProduct = productCreator.createProduct(product, productObj);
        db.collection(product).updateOne({'_id': new ObjectID(productId)}, updatedProduct)
            .then(value => {
                resolve(value);
            })
            .catch(error => {
                reject(error);
            })
    });
};

module.exports.deleteProduct = function (db, product, productId) {
    return db.collection(product).deleteOne({'_id': new ObjectID(productId)});
};



