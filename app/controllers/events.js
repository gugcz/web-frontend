// Page used to show list of all events
// TODO filters by chapter, city, ...

let Events = require('../models/events');

module.exports = function(req, res) {
  Events.all(function(events) {
    res.render('events', {
      title: 'Akce',
      favicon: 'gug',
      events: events,
    });
  });
};
