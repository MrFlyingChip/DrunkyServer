module.exports.createSortType = function (db, sortType) {
    return db.createCollection(sortType);
};

module.exports.addToSortType = function (db, sortType, name, description, photo) {
    return new Promise((resolve, reject) => {
       const newSort = {name: name, description: description, photo: photo, sortType: sortType};
       db.collection(sortType).insertOne(newSort)
           .then(value => {
               resolve(value.ops[0]);
           })
           .catch(error => {
               reject(error);
           })
    });
};

module.exports.getSortType = function (db, sort) {

}