toolCreator = function (toolObj) {
  return {
      name: toolObj.name,
      description: toolObj.description,
      image: toolObj.image
  }
};

module.exports.createTool = toolCreator;