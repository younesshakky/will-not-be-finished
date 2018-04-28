const express = require('express');
const router = express.Router();
const mainCtrl = require('../controllers/index')
const usersRoutes = require('./users/users.route')
const challengesRoutes = require('./challenges.route')

router.get('/', mainCtrl.welcome)

// router.use('/users', usersRoutes)
router.use('/challenges', challengesRoutes)

module.exports = router;
