const config = {}

const hostname = window && window.location && window.location.hostname;

if (hostname == 'projectly.surge.sh') {
  config.api_url = 'http://projectly-api.herokuapp.com/'
} else {
  config.api_url = 'http://localhost:9000/api'
}

export default config;