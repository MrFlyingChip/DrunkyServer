filterTypeCreator = function (filterTypeObj) {
    return {
        name: filterTypeObj.name,
        product: filterTypeObj.product
    }
};

filterCreator = function(filterObj){
    return{
        name: filterObj.name,
        description: filterObj.description,
        image: filterObj.image,
        filterType: filterObj.filterType
    }
};

module.exports.createFilter = filterCreator;
module.exports.createFilterType = filterTypeCreator;