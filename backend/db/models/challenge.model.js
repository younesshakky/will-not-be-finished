const mongoose = require('mongoose')

var Schema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: true
  },

  category: {
    type: String,
    trim: true,
    required: true
  },

  text: {
    type: String,
    trim: true,
    required: true
  },

  accepted: {
    type: Boolean,
    default: false
  },

  createdAt: {
    type: Date,
    default: Date.now()
  }
})

module.exports = mongoose.model('challenges', Schema)