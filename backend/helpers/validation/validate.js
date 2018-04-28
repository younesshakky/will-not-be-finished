const Joi = require('joi')
const schemas = require('./schemas')

exports.user = function (req, res, next) {
  return Joi.validate(userObject, schemas.createUser)
}