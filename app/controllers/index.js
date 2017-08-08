const sectionModel = require('../models/sections');
const NotFound = require('../errorDefinitions').NotFound;

module.exports = async function indexController(req, res) {
  if (req.originalUrl !== '/' &&
    req.originalUrl !== '/index.html') {
    throw new NotFound(req.originalUrl);
  }

  const sections = await sectionModel.getSections();

  res.render('index', {
    title: 'Česká Google User Group',
    message: 'Hello there!',
    sections
  });
};

