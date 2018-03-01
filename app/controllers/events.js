// Page used to show list of all events
// TODO filters by chapter, city, ...


module.exports = function(req, res) {
    res.render('events', {
      title: 'Akce',
      favicon: 'gug',
      events: [],
    });
};
