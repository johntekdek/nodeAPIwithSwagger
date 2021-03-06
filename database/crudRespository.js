const mongoose = require ('mongoose');
const constants = require ('../constants/constants');

module.exports.createConnection = () => {
  return new Promise ((resolve, reject) => {
    let responseObj = {};
    mongoose.connect (process.env.DB_URL, {useNewUrlParser: true}, err => {
      if (err) {
        responseObj.status = constants.databaseStatus.DATABASE_ERROR;
        console.log ('responsObj', responseObj);
        return reject (responseObj);
      } else {
        responseObj.status = constants.databaseStatus.DATABASE_CONNECTED;
        console.log ('responsObj', responseObj);
        return resolve (responseObj);
      }
    });
  });
};

module.exports.insertData = data => {
  return new Promise ((resolve, reject) => {
    try {
      data.model
        .save ()
        .then (docs => {
          //success
          resolve ({
            results: docs,
            status: constants.databaseStatus.ENTITY_CREATED,
          });
        })
        .catch (err => {
          reject ({
            error: err.message,
            status: constants.databaseStatus.DATABASE_ERROR,
          });
        });
    } catch (err) {
      console.log ('Something went wrong', err);
    }
  });
};

module.exports.find = data => {
  return new Promise ((resolve, reject) => {
    try {
      data.model
        .find (data.query, data.excludeFields, data.pagination)
        .then (docs => {
          //success
          resolve ({
            results: docs,
            status: constants.databaseStatus.ENTITY_FETCHED,
          });
        })
        .catch (err => {
          reject ({
            error: err.message,
            status: constants.databaseStatus.DATABASE_ERROR,
          });
        });
    } catch (err) {
      console.log ('Something went wrong', err);
    }
  });
};

module.exports.findOneAndUpdate = data => {
  return new Promise ((resolve, reject) => {
    try {
      data.model.findOneAndUpdate
        .find (data.findquery,data.updateQuery)
        .then (docs => {
          //success
          resolve ({
            results: docs,
            status: constants.databaseStatus.ENTITY_MODIFIED
          });
        })
        .catch (err => {
          reject ({
            error: err.message,
            status: constants.databaseStatus.DATABASE_ERROR,
          });
        });
    } catch (err) {
      console.log ('Something went wrong:CrudRepository:findOneAndUpdate', err);
    }
  });
};


module.exports.deleteOne = data => {
  return new Promise ((resolve, reject) => {
    try {
      data.model.findOneAndUpdate
        .find (data.findquery,data.updateQuery)
        .then (docs => {
          //success
          resolve ({
            results: docs,
            status: constants.databaseStatus.ENTITY_DELETED
          });
        })
        .catch (err => {
          reject ({
            error: err.message,
            status: constants.databaseStatus.DATABASE_ERROR,
          });
        });
    } catch (err) {
      console.log ('Something went wrong:CrudRepository:delete one', err);
    }
  });
};