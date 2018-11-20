const ingredient = require('../models/ingredient');

module.exports.fetchIngredient = function (db, req, res) {
    const ingredientId = req.params['id'];
    ingredient.fetchIngredient(db, ingredientId)
        .then(value => {
            res.send(value);
        })
        .catch(error => {
            res.send(error);
        })
};

module.exports.fetchAllIngredients = function (db, req, res) {
    ingredient.fetchAllIngredients(db)
        .then(value => {
            res.send(value);
        })
        .catch(error => {
            res.send(error);
        })
};