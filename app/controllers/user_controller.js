const comment = require('../models/comment');

module.exports.addComment = function (req, res, db) {
    const productId = req.params['id'];
    const userId = req.body['userId'];
    const text = req.body['text'];
    comment.addComment(db, productId, userId, text)
        .then(value => {
            res.send(value);
        })
        .catch(error => {
            res.send(error);
        })
};

module.exports.updateComment = function (req, res, db) {
    const commentId = req.body['commentId'];
    const newText = req.body['text'];
    comment.updateComment(db, commentId, newText)
        .then(value => {
            res.send(value);
        })
        .catch(error => {
            res.send(error);
        })
};

module.exports.deleteComment = function (req, res, db) {
    const commentId = req.body['commentId'];
    comment.deleteComment(db, commentId)
        .then(value => {
            res.send(value);
        })
        .catch(error => {
            res.send(error);
        })
};

