const ObjectID = require('mongodb').ObjectID;
const filterTypeCreator = require('../creators/filterTypeCreator');
const FILTER_COLLECTION = require('../constants/collectionNames').FILTER_COLLECTION;
const FILTER_TYPES_COLLECTION = require('../constants/collectionNames').FILTER_TYPES_COLLECTION;

//filter types
module.exports.fetchFilterType = function (db, typeId) {
    return new Promise((resolve, reject) => {
        db.collection(FILTER_TYPES_COLLECTION).findOne({'_id': new ObjectID(typeId)})
            .then(value => {
                if (value) {
                    resolve(value);
                } else {
                    reject(new Error('no filter type with this id!'));
                }
            })
            .catch(error => {
                reject(error);
            })
    })
};

module.exports.fetchAllFilterTypes = function(db){
    return db.collection(FILTER_TYPES_COLLECTION).find().toArray();
};

module.exports.fetchFilterTypesProduct = function(db, productName) {
    return db.collection(FILTER_TYPES_COLLECTION).find({'product': productName}).toArray();
};

module.exports.fetchFiltersForProduct = function(db, productName){
    return new Promise((resolve, reject) => {
        let filters = {};
        fetchFilterTypesProduct(db, productName)
            .then(value => {
                filters = value;
                filters.forEach(item => item.filters = []);
                return Promise.all(filters.map(item => this.fetchFiltersFilterType(db, item._id)));
            })
            .then(filtersResult => {
                filtersResult.forEach(filter => {
                    filters.forEach(filterType => {
                        if(filter.filterType === filterType._id) {
                            filterType.filters.push(filter);
                        }
                    });
                });
                resolve(filters);
            })
            .catch(error => {
                reject(error);
            })
    });
};

module.exports.createFilterType = function(db, filterTypeObj){
    return new Promise((resolve, reject) => {
        const newFilterType = filterTypeCreator.createFilterType(filterTypeObj);
        db.collection(FILTER_TYPES_COLLECTION).insertOne(newFilterType)
            .then(value => {
                resolve(value.ops[0]);
            })
            .catch(error => {
                reject(error);
            })
    })
};

module.exports.updateFilterType = function(db, typeId, typeObj){
    return new Promise((resolve, reject) => {
        const updatedFilterType = filterTypeCreator.createFilterType(typeObj);
        db.collection(FILTER_TYPES_COLLECTION).updateOne({'_id': new ObjectID(typeId)}, updatedFilterType)
            .then(value => {
                resolve(value);
            })
            .catch(error => {
                reject(error);
            })
    })
};

module.exports.deleteFilterType = function(db, typeId){
    return db.collection(FILTER_TYPES_COLLECTION).deleteOne({'_id': new ObjectID(typeId)});
};

//filters
module.exports.fetchFilter = function (db, filterId) {
    return new Promise((resolve, reject) => {
        db.collection(FILTER_COLLECTION).findOne({'_id': new ObjectID(filterId)})
            .then(value => {
                if (value) {
                    resolve(value);
                } else {
                    reject(new Error('no filter with this id!'));
                }
            })
            .catch(error => {
                reject(error);
            })
    })
};

module.exports.fetchFiltersFilterType = function (db, typeId) {
    return db.collection(FILTER_COLLECTION).find({'filterType': typeId}).toArray();
};

module.exports.createFilter = function(db, filterObj){
    return new Promise((resolve, reject) => {
        const newFilter = filterTypeCreator.createFilter(filterObj);
        db.collection(FILTER_COLLECTION).insertOne(newFilter)
            .then(value => {
                resolve(value.ops[0]);
            })
            .catch(error => {
                reject(error);
            })
    })
};

module.exports.updateFilter = function(db, filterId, filterObj){
    return new Promise((resolve, reject) => {
        const updatedFilter = filterTypeCreator.createFilter(filterObj);
        db.collection(FILTER_COLLECTION).updateOne({'_id': new ObjectID(filterId)}, updatedFilter)
            .then(value => {
                resolve(value);
            })
            .catch(error => {
                reject(error);
            })
    })
};

module.exports.deleteFilter = function(db, filterId){
    return db.collection(FILTER_COLLECTION).deleteOne({'_id': new ObjectID(filterId)});
};