const ObjectID = require('mongodb').ObjectID;
const user = require('./user');
const comment = require('./comment');

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

findProduct = function(db, product, productId){
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



