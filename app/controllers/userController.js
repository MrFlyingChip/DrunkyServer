const comment = require('../models/comment');
const user = require('../models/user');

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

module.exports.logIn = function (req, res, db) {
    const username = req.body['username'];
    const password = req.body['password'];
    user.logInUser(db, username, password)
        .then(value => {
            res.send(value);
        })
        .catch(error => {
            res.send(error);
        })
};

module.exports.signUp = function (req, res, db) {
    const userObj = req.body['user'];
    userObj.image = 'default.png';
    user.signInNewUser(db, userObj)
        .then(value => {
            res.send({'ok': 'ok'});
        })
        .catch(error => {
            res.send(error);
        })
};

module.exports.accountInfo = function (req, res, db) {
    const userId = req.body['userId'];
    user.fetchUserInfo(db, userId)
        .then(value => {
            res.send(value);
        })
        .catch(error => {
            res.send(error);
        })
};



