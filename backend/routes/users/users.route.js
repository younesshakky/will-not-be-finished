const express = require('express');
const router = express.Router();
const userCtrl = require('../../controllers/users/index')

router.post('/signup', userCtrl.createUser)

router.get('/', function (req, res, next) {
  res.send('users works')
  console.log('hey')
})

module.exports = router;
