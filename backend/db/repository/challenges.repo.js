const mongoose = require('mongoose')
const challengeModel = require('../models/challenge.model')


exports.submitChallenge = (data, accept=false) => {
  let challengeData = Object.assign({}, data, { accpted: accept})
  let challenge = new challengeModel(data)
  return challenge.save()
}

exports.getRandomChallenge = (category) => {
  return challengeModel.find({ category }).then(challenges => {
    var rand = Math.floor(Math.random() * challenges.length)
    // console.log(challenges[rand])
    return challenges[rand]
  })
}
