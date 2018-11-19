const creators = {'drink': createDrink, 'cocktail': createCocktail, 'bar': createBar};

function getCreator(productName) {
    return creators[productName];
}

function createDrink(drink){
    const drinkObj = {
        name: drink.name,
        description: drink.description,
        image: drink.image,
        country: drink.country,
        likes: drink.likes,
        favourites: drink.favourites,
        sortingTypes: drink.sortingTypes
    };
    return drinkObj;
}

function createCocktail(cocktail){
    const drinkObj = {
        name: cocktail.name,
        description: cocktail.description,
        image: cocktail.image,
        likes: cocktail.likes,
        favourites: cocktail.favourites,
        drinkTypes: cocktail.drinkTypes,
        drinks: cocktail.drinks,
        ingredients: cocktail.ingredients,
        tools: cocktail.tools,
        sortingTypes: cocktail.sortingTypes
    };
    return drinkObj;
}

function createBar(bar){
    const drinkObj = {
        name: drink.name,
        description: drink.description,
        image: drink.image,
        country: drink.country,
        likes: 0,
        favourites: 0,
        sortingTypes: drink.sortingTypes
    };
    return drinkObj;
}

module.exports.createProduct = function (productName, product) {
  let productCreator = getCreator(productName);
  return productCreator(product);
};