/* Joi validation schemas */

const Joi = require('joi')

const createUser = Joi.object().keys({
  username: Joi.string().alphanum().min(3).max(30).required(),
  password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/).required(),
  email: Joi.string().email().required()
})

module.exports = {
  createUser
}


// module.exports = {
//   createUserSchema
// }


// const result = Joi.validate({
//   username: 'simhi',
//   email: 'you@me',
//   password: '1012'
// }, createUserSchema)

// console.log(result)