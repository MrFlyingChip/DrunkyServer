const ingredient = require('../models/ingredient');

module.exports.fetchIngredient = function (db, req, res) {
    const ingredientId = req.params['id'];
    ingredient.fetchIngredient(db, ingredientId)
        .then(value => {
            res.send(value);
        })
        .catch(error => {
            res.send({error: error.message});
        })
};

module.exports.fetchAllIngredients = function (db, req, res) {
    ingredient.fetchAllIngredients(db)
        .then(value => {
            res.send(value);
        })
        .catch(error => {
            res.send({error: error.message});
        })
};

module.exports.createIngredient = function(db, req, res) {
    const ingredientObj = req.body;
    ingredientObj.image = req.file.originalname;
    ingredient.createIngredient(db, ingredientObj)
        .then(value => {
            res.send(value);
        })
        .catch(error => {
            res.send({error: error.message});
        })
};

module.exports.updateIngredient = function (db, req, res) {
    const ingredientId = req.params['id'];
    const ingredientObj = req.body;
    ingredientObj.image = (req.file) ? req.file.originalname : ingredientObj.image;
    ingredient.updateIngredient(db, ingredientId, ingredientObj)
        .then(value => {
            res.send(value);
        })
        .catch(error => {
            res.send({error: error.message});
        })
};

module.exports.deleteIngredient = function (db, req, res) {
    const ingredientId = req.params['id'];
    ingredient.deleteIngredient(db, ingredientId)
        .then(value => {
            res.send(value);
        })
        .catch(error => {
            res.send({error: error.message});
        })
};