const NotFound = require('../errorDefinitions').NotFound;

module.exports = function (err, req, res, next) {
  //console.error(err);

  if (err instanceof NotFound) {
    res.status(404);
    res.render('errors/404', {
      err
    });
  } else {
    res.status(500);
    res.render('errors/500', {
      err
    });
  }
};
