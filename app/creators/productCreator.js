const creators = {'drink': createDrink, 'cocktail': createCocktail, 'bar': createBar};

function getCreator(productName) {
    return creators[productName];
}

function createDrink(drink){
    return {
        name: drink.name,
        description: drink.description,
        image: drink.image,
        likes: drink.likes,
        favourites: drink.favourites,
        filterTypes: drink.filterTypes
    };
}

function createCocktail(cocktail){
    return {
        name: cocktail.name,
        description: cocktail.description,
        image: cocktail.image,
        likes: cocktail.likes,
        favourites: cocktail.favourites,
        drinkTypes: cocktail.drinkTypes,
        drinks: cocktail.drinks,
        ingredients: cocktail.ingredients,
        tools: cocktail.tools,
        filterTypes: cocktail.filterTypes
    };
}

function createBar(bar){
    return {
        name: bar.name,
        description: bar.description,
        image: bar.image,
        likes: bar.likes,
        favourites: bar.favourites,
        filterTypes: bar.filterTypes
    };
}

module.exports.createProduct = function (productName, product) {
  let productCreator = getCreator(productName);
  return productCreator(product);
};