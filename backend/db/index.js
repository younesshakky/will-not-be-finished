const mongoose = require('mongoose')
const config = require('../config/index');


exports.init = function () {
  const db = mongoose.connection

  mongoose.connect(config.db.uri, config.db.options)
  .then(() => {
    console.log("connected to database: %s", config.db.uri)
  })

  db.on('error', (err) => dbError(err))
}

function dbError (err) {
  throw new Error('Failed while connecting to MongoDB -> ' + err)
}
