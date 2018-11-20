ingredientCreator = function (ingredientObj) {
    return {
        name: ingredientObj.name,
        description: ingredientObj.description,
        image: ingredientObj.image
    }
};

module.exports.createIngredient = ingredientCreator;