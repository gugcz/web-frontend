var Events = require('../models/events');

module.exports = function (req, res) {

  Events.all(function(events) {
    res.render('events/index', {events: events})
  });

};