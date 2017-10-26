// Page which is used by visitors to join community

module.exports = function(req, res) {
  res.render('join/index', {

    title: 'Přidej se k nám',
    favicon: 'gug',
  });
};
