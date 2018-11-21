function userCreator(userObj) {
    return {
        username: userObj.username,
        email: userObj.email,
        password: userObj.password,
        likedProducts: userObj.likedProducts,
        favouriteProducts: userObj.favouriteProducts,
        image: userObj.image,
        type: userObj.type
    };
}

module.exports.userCreator = userCreator;