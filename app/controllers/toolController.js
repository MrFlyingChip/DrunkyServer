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