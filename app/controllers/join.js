// Page which is used by visitors to join community


module.exports = async function(req, res) {

  //console.time('HelloWorld');
  const helloWorld = await (require('../models/chapter')).getHelloWorld();
  //console.timeEnd('HelloWorld');


  res.render('join', {

    title: 'Přidej se k nám',
    favicon: 'gug',
  });
};
