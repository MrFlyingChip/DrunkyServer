const ObjectID = require('mongodb').ObjectID;
const ingredientCreator = require('../creators/ingredientCreator');
const INGREDIENTS_COLLECTION = require('../constants/collectionNames').INGREDIENTS_COLLECTION;

module.exports.fetchIngredient = function (db, ingredientId) {
    return new Promise((resolve, reject) => {
        db.collection(INGREDIENTS_COLLECTION).findOne({'_id': new ObjectID(ingredientId)})
            .then(value => {
                if(value){
                    resolve(value);
                } else {
                    reject(value);
                }
            })
            .catch(error => {
                reject(error);
            })
    });
};

module.exports.fetchAllIngredients = function (db) {
    return db.collection(INGREDIENTS_COLLECTION).find().toArray();
};

module.exports.createIngredient = function (db, ingredientObj) {
    return new Promise((resolve, reject) => {
        const newIngredient = ingredientCreator.createIngredient(ingredientObj);
        db.collection(INGREDIENTS_COLLECTION).insertOne(newIngredient)
            .then(value => {
                resolve(value.ops[0]);
            })
            .catch(error => {
                reject(error);
            })
    });
};

module.exports.updateIngredient = function (db, ingredientId, ingredientObj) {
    return new Promise((resolve, reject) => {
        const updatedIngredient = ingredientCreator.createIngredient(ingredientObj);
        db.collection(INGREDIENTS_COLLECTION).updateOne({'_id': new ObjectID(ingredientId)}, updatedIngredient)
            .then(value => {
                resolve(value);
            })
            .catch(error => {
                reject(error);
            })
    });
};

module.exports.deleteIngredient= function (db, ingredientId) {
    return db.collection(INGREDIENTS_COLLECTION).deleteOne({'_id': new ObjectID(ingredientId)});
};
