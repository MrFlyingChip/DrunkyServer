module.exports.createSortType = function (db, sortType, product) {
    return new Promise((resolve, reject) => {
        const newSortType = {name: sortType + product};
        db.createCollection(sortType + product)
            .then(value => {
                return db.collection('sortTypes').insertOne(newSortType);
            })
            .then(value => {
                resolve(value.ops[0]);
            })
            .catch(error => {
                reject(error);
            })
    });

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

module.exports.getSortType = function (db, sortId) {

};