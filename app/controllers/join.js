// Page which is used by visitors to join community


module.exports = async function(req, res) {

  res.render('join', {

    title: 'Přidej se k nám',
    favicon: 'gug',
  });
};
