const mongoose = require('mongoose')

const User = {
  username: {
    type: String,
    trim: true,
    required: true,
    unique: true
  },

  firstname: {
    type: String,
    trim: true,
  },

  lastname: {
    type: String,
    trim: true,
  },

  email: {
    type: String,
    trim: true,
    required: true,
    unique: true
  },

  password: {
    type: String,
    required: true
  },

  profileImageUrl: {
    type: String,
    trim: true
  }
}


module.exports = mongoose.Schema(User)