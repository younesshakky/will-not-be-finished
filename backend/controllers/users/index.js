let userRepository = require('../../db/repository/user.repo')

exports.createUser = function (req, res, next) {
  var userData = req.body

  return userRepository.create(userData)
  .then((user) => {
    res.send({
      success: true,
      message: 'user has been created'
    })
  })
  .catch(err => { throw err })
}


