require('dotenv').config();

const Config = {
  AccessControl(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header(
      'Access-Control-Allow-Methods',
      'GET, POST, OPTIONS, PUT, PATCH, DELETE'
    );
    res.header(
      'Access-Control-Allow-Headers',
      'X-Requested-With, content-type, x-access-token'
    );
    res.header('Access-Control-Allow-Credentials', true);
    if ('OPTIONS' === req.method) {
      res.sendStatus(200);
    } else {
      console.log(`${req.ip} ${req.method} ${req.url}`);
      next();
    }
  }
};

module.exports = Config;
