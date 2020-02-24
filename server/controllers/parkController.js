const databaseHandler = require('./databaseController');

let getPark = async (req, res) => {
  const query = `SELECT spots FROM pool WHERE 1`;
  return databaseHandler.queryDatabase(res, query, [], 'Get a park');
};

let updatePark = async (req, res) => {
  const query = `UPDATE pool SET spots=? WHERE 1`;
  return databaseHandler.queryDatabaseBoolean(
    res,
    query,
    [JSON.stringify(req.body)],
    'Update plan'
  );
};

module.exports = {
  get: getPark,
  update: updatePark
};
