
const config = {
  app: {
    name: 'projectly-api'
  },

  db: {
    uri: 'mongodb://localhost:27017/projectly',
    options: {}
  }
}

if (process.env.ENVIRONMENT === 'prod') {
  config.db.uri = `mongodb://${process.env.DB_USER}:${process.env.DB_PASSWORD}@ds161939.mlab.com:61939/projectly`
}




module.exports = config
