const ObjectID = require('mongodb').ObjectID;

module.exports.fetchUserForComment = function (db, userId) {
  return new Promise((resolve, reject) => {
      findUser(db, userId)
          .then(value => {
              resolve({username: value.username, photo: value.photo})
          })
          .catch(error => {
              reject(error);
          })
  });
};

module.exports.hasIdInArray = function(db, key, id, userId){
    return new Promise((resolve, reject) => {
       findUser(db, userId)
           .then(user => {
               const hasInArray = user[key].includes(id);
               resolve(hasInArray);
           })
           .catch(error => {
               reject(error);
           })
    });
};

module.exports.signInNewUser = function(db, newUser){
    return new Promise((resolve, reject) => {
        findUserWithField(db, 'username', newUser.username)
            .then(value => {
                if(value != null){
                    throw new Error('there is a user with such username');
                } else {
                    return findUserWithField(db, 'email', newUser.email)
                }
            })
            .then(value => {
                if(value != null){
                    throw new Error('there is a user with such email');
                } else {
                    return createNewUser(db, newUser);
                }
            })
            .then(value => {
                resolve(value);
            })
            .catch(error => {
                reject(error);
            })
    })
};

findUser = function (db, userId) {
    return new Promise((resolve, reject) => {
        db.collection('users').findOne({'_id': new ObjectID(userId)})
            .then(value => {
                if(value){
                    resolve(value);
                } else {
                    reject(new Error('no such user'));
                }
            })
            .catch(error => {
                reject(error);
            })
    });
};

findUserWithField = function(db, key, value){
    return new Promise((resolve, reject) => {
        db.collection('users').findOne({key: value})
            .then(user => {
                resolve(user);
            })
            .catch(erroe => {
                reject(error);
            })
    })
};

createNewUser = function (db, newUser) {
    return new Promise((resolve, reject) => {
       db.collection('users').insertOne(newUser)
           .then(value => {
               resolve(value.ops[0]);
           })
           .catch(error => {
               reject(error);
           })
    });
};