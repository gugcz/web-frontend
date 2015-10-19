// Load all modules and controllers
// Set routes
var express = require('express')
  , router = express.Router()

router.get('/', function (req, res) {
  res.render('index', { title: 'Hey', message: 'Hello there!'});
})

router.use('/events', require('./events'))

module.exports = router
