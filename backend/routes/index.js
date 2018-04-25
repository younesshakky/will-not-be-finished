var express = require('express');
var router = express.Router();
var fs = require('fs')

router.get('/', function (req, res) {
  res.send({ message: 'hello bitch' })
});

// router.get('/challenges', function (req, res, next) {
//   console.log('please specify something')

//   next(new Error('ErRoR, you\'ve commited a great sin buddy! no one will ever forgive ya..'))
// })


router.get('/challenges/:category', function (req, res, next) {

  getDataByCategory(req.params.category, (err, data) => {
		if (err)  {
			err.status = 404;
			return next(err);
		}
		
    const challenges = data.toString().split('\n\n')

    const rand = Math.floor(Math.random() * challenges.length)

    res.send({
      challenge: challenges[rand]
    })
  })
})


function getDataByCategory(category, cb) {
  return fs.readFile(`./data/${category}.txt`, cb)
}



module.exports = router;

