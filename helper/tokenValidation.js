const jwt = require ('jsonwebtoken');
const constants = require ('../constants/constants');

module.exports = {
  validateToken: () => {
    return (req, res, next) => {
      const bearerHeader = req.headers['authorization'];
      console.log ('bearerHeadr*******', bearerHeader);
      console.log ('headers*******', req.headers);
    };
  },
};
