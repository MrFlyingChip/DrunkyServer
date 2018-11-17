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