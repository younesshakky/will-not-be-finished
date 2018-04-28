const express = require('express');
const router = express.Router();
const challengesCtrl = require('../controllers/challenges.controller')

router.post('/submit', challengesCtrl.submit)
router.get('/:category', challengesCtrl.randomChallenge)

module.exports = router;