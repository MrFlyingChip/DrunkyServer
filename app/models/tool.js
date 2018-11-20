const ObjectID = require('mongodb').ObjectID;
const toolCreator = require('../creators/toolCreator');
const TOOL_COLLECTION = require('../constants/collectionNames').TOOL_COLLECTION;

module.exports.fetchTool = function (db, toolId) {
  return new Promise((resolve, reject) => {
     db.collection(TOOL_COLLECTION).findOne({'_id': new ObjectID(toolId)})
         .then(value => {
             if(value){
                 resolve(value);
             } else {
                 reject(value);
             }
         })
         .catch(error => {
             reject(error);
         })
  });
};

module.exports.fetchAllTools = function (db) {
    return db.collection(TOOL_COLLECTION).find().toArray();
};

module.exports.createTool = function (db, toolObj) {
    return new Promise((resolve, reject) => {
       const newTool = toolCreator.createTool(toolObj);
       db.collection(TOOL_COLLECTION).insertOne(newTool)
           .then(value => {
               resolve(value.ops[0]);
           })
           .catch(error => {
               reject(error);
           })
    });
};

module.exports.updateTools = function (db, toolId, toolObj) {
    return new Promise((resolve, reject) => {
        const updatedTool = toolCreator.createTool(toolObj);
        db.collection(TOOL_COLLECTION).updateOne({'_id': new ObjectID(toolId)}, updatedTool)
            .then(value => {
                resolve(value);
            })
            .catch(error => {
                reject(error);
            })
    });
};

module.exports.deleteTool = function (db, toolId) {
    return db.collection(TOOL_COLLECTION).deleteOne({'_id': new ObjectID(toolId)});
};
