const ObjectID = require('mongodb').ObjectID;

module.exports.addComment = function (db, productId, userId, text){
    return new Promise((resolve, reject) => {
        const newComment = {user: userId, text: text, product: productId, date: Date.now()};
        db.collection('comments').insertOne(newComment)
            .then(value => {
                resolve(value.ops[0]);
            })
            .catch(error => {
                reject(error);
            })
    });
};

module.exports.deleteComment = function (db, commentId){
    return new Promise((resolve, reject) => {
        db.collection('comments').deleteOne({'_id': new ObjectID(commentId)})
            .then(value => {
                resolve(value);
            })
            .catch(error => {
                reject(error);
            })
    });
};

module.exports.updateComment = function (db, commentId, newText) {
    return new Promise((resolve, reject) => {
        db.collection('comments').updateOne({'_id': new ObjectID(commentId)}, {'text': newText})
            .then(value => {
                resolve(value);
            })
            .catch(error => {
                reject(error);
            })
    });
};

module.exports.findComment = function(db, commentId){
  return new Promise((resolve, reject) => {
     db.collection('comments').findOne({'_id': new ObjectID(commentId)})
         .then(comment => {
             if(comment){
                 resolve(comment);
             } else {
                 reject(new Error('no such comment'));
             }
         })
         .catch(error => {
             reject(error);
         })
  });
};

module.exports.fetchProductComments = function (productId, db){
    return new Promise((resolve, reject) => {
        db.collection('comments').find({'product' : productId}).toArray()
            .then(value => {
                resolve(value);
            })
            .catch(error => {
                reject(new Error('error'));
            })
    });
}