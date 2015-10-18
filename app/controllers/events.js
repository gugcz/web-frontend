var express = require('express')
  , router = express.Router()
  , Events = require('../models/events')

router.get('/', function (req, res) {
  Events.all(function(events) {
    res.render('events/index', {events: events})
  })
})

module.exports = router
