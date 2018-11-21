const tool = require('../models/tool');

module.exports.fetchTool = function (db, req, res) {
    const toolId = req.params['id'];
    tool.fetchTool(db, toolId)
        .then(value => {
            res.send(value);
        })
        .catch(error => {
            res.send(error);
        })
};

module.exports.fetchAllTools = function (db, req, res) {
    tool.fetchAllTools(db)
        .then(value => {
            res.send(value);
        })
        .catch(error => {
            res.send(error);
        })
};

module.exports.createTool = function (db, req, res) {
    const toolObj = req.body;
    toolObj.image = req.file.originalname;
    tool.createTool(db, toolObj)
        .then(value => {
            res.send(value);
        })
        .catch(error => {
            res.send(error);
        })
};

module.exports.updateTool = function (db, req, res) {
    const toolId = req.params['id'];
    const toolObj = req.body;
    toolObj.image = (req.file) ? req.file.originalname : toolObj.image;
    tool.updateTools(db, toolId, toolObj)
        .then(value => {
            res.send(value);
        })
        .catch(error => {
            res.send(error);
        })
};

module.exports.deleteTool = function (db, req, res) {
    const toolId = req.params['id'];
    tool.deleteTool(db, toolId)
        .then(value => {
            res.send(value);
        })
        .catch(error => {
            res.send(error);
        })
};