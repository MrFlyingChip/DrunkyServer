filterTypeCreator = function (filterTypeObj) {
    return {
        name: filterTypeObj.name,
        product: filterTypeObj.product
    }
};

module.exports.createFilterType = filterTypeCreator;