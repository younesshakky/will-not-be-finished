const mongoose = require('mongoose')
const userSchema = require('../models/user.model')
const User = mongoose.model('users', userSchema)

function create(user) {
  var newUser = new User(user)
  return newUser.save()
}

function deleteUser(id) {
  return function () {
    return 'hello, world';
  }
}

module.exports = { create, deleteUser }