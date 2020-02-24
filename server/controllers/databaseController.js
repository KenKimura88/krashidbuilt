const db = require('../model/database');
const pool = db.getPool();

let queryDatabase = async (res, query, params, operationString) => {
  return new Promise((resolve, reject) => {
    try {
      pool.query(query, params, (err, sqlRes) => {
        if (err) {
          res.json({
            success: false,
            message: operationString + ' failed. Database failure.',
            result: {}
          });
          reject(err);
        } else if (sqlRes.length > 0 || sqlRes.affectedRows > 0) {
          res.json({
            success: true,
            message: operationString + ' successful!',
            result: sqlRes
          });
          resolve(true);
        } else {
          res.json({
            success: false,
            message:
              operationString +
              ' failed. The desired data was not found in the database.',
            result: {}
          });
          resolve(false);
        }
      });
    } catch (err) {
      console.err(err);
      res.json({
        success: false,
        message:
          operationString + ' unsuccessful. This may be network related.',
        result: {}
      });
    }
  });
};

let queryDatabaseBoolean = async (res, query, params, operationString) => {
  return new Promise((resolve, reject) => {
    try {
      pool.query(query, params, (err, sqlRes) => {
        if (err) {
          res.json({
            success: false,
            message: operationString + ' failed. Database failure.'
          });
          reject(err);
        } else if (sqlRes.affectedRows > 0) {
          res.json({
            success: true,
            message: operationString + ' successful!',
            result: params[0]
          });
          resolve(true);
        } else {
          res.json({
            success: false,
            message:
              operationString +
              ' failed. The desired data was not found in the database.'
          });
          resolve(false);
        }
      });
    } catch (err) {
      console.err(err);
      res.json({
        success: false,
        message: operationString + ' unsuccessful. This may be network related.'
      });
    }
  });
};

module.exports = {
  queryDatabase: queryDatabase,
  queryDatabaseBoolean: queryDatabaseBoolean
};
