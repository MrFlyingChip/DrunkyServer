const filterType = require('../models/filterType');

//filter type
module.exports.fetchFilterType = function (db, req, res) {
    const filterTypeId = req.params['id'];
    filterType.fetchFilterType(db, filterTypeId)
        .then(value => {
            res.send(value);
        })
        .catch(error => {
            res.send({error: error.message});
        })
};

module.exports.fetchFilterTypeProduct = function (db, req, res) {
    const product = req.params['product'];
    filterType.fetchFilterTypesProduct(db, product)
        .then(value => {
            res.send(value);
        })
        .catch(error => {
            res.send({error: error.message});
        })
};

module.exports.createFilterType = function (db, req, res) {
    const filterTypeObj = req.body;
    filterType.createFilterType(db, filterTypeObj)
        .then(value => {
            res.send(value);
        })
        .catch(error => {
            res.send({error: error.message});
        })
};

module.exports.updateFilterType = function (db, req, res) {
    const filterTypeId = req.params['id'];
    const filterTypeObj = req.body;
    filterType.updateFilterType(db, filterTypeId, filterTypeObj)
        .then(value => {
            res.send(value);
        })
        .catch(error => {
            res.send({error: error.message});
        })
};

module.exports.deleteFilterType = function (db, req, res) {
    const filterTypeId = req.params['id'];
    filterType.deleteFilterType(db, filterTypeId)
        .then(value => {
            res.send(value);
        })
        .catch(error => {
            res.send({error: error.message});
        })
};

//filter
module.exports.fetchFilter = function (db, req, res) {
    const filterId = req.params['id'];
    filterType.fetchFilter(db, filterId)
        .then(value => {
            res.send(value);
        })
        .catch(error => {
            res.send({error: error.message});
        })
};

module.exports.fetchFiltersFilterType= function (db, req, res) {
    const filterTypeId = req.params['id'];
    filterType.fetchFiltersFilterType(db, filterTypeId)
        .then(value => {
            res.send(value);
        })
        .catch(error => {
            res.send({error: error.message});
        })
};

module.exports.fetchFiltersForProduct = function(db, req, res){
    const productName = req.params['product'];
    filterType.fetchFiltersForProduct(db, productName)
        .then(value => {
            res.send(value);
        })
        .catch(error => {
            res.send({error: error.message});
        })
};

module.exports.createFilter = function (db, req, res) {
    const filterObj = req.body;
    filterObj.image = req.file.originalname;
    filterType.createFilter(db, filterObj)
        .then(value => {
            res.send(value);
        })
        .catch(error => {
            res.send({error: error.message});
        })
};

module.exports.updateFilter = function (db, req, res) {
    const filterId = req.params['id'];
    const filterObj = req.body;
    filterObj.image = (req.file) ? req.file.originalname : filterObj.image;
    filterType.updateFilter(db, filterId, filterObj)
        .then(value => {
            res.send(value);
        })
        .catch(error => {
            res.send({error: error.message});
        })
};

module.exports.deleteFilter = function (db, req, res) {
    const filterId = req.params['id'];
    filterType.deleteFilter(db, filterId)
        .then(value => {
            res.send(value);
        })
        .catch(error => {
            res.send({error: error.message});
        })
};