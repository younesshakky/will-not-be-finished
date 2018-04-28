const APIError = require('./APIError');

module.exports = {
  
  notFound: function () {
    return new APIError('not found', 404)
  },
  badCreds: function () {
    return new APIError('not found', 401)    
  },
  validationErr: function () {
    return new APIError('not found', 400)    
  }


}