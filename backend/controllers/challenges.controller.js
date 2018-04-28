const fs = require('fs')
const challengesRepo = require('../db/repository/challenges.repo')
const _ = require('lodash')

exports.randomChallenge = (req, res, next) => {
  if (!req.params.category) {
    return next(new Error('you must do sometin'))
  }
  challengesRepo.getRandomChallenge(req.params.category)
  .then(challenge => {
    console.log(challenge)
    res.send(challenge)
  })
}


exports.submit = function (req, res, next) {
  if (!req.body) {
    next(new Error('something went wrong'))
  }

  console.log(req.body)

  challengesRepo.submitChallenge(req.body)
  .then(challenge => _.pull(challenge, '__v', '_id'))
  .then(challenge => res.send(challenge))
}

