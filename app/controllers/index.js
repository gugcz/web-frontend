const sectionModel = require('../models/sections');
const organizerModel = require('../models/organizers');
const eventsModel = require('../models/events');
const map = require('../controllers/event-map');
const NotFound = require('../errorDefinitions').NotFound;

module.exports = async function indexController(req, res) {
  if (req.originalUrl !== '/' &&
    req.originalUrl !== '/index.html') {
    throw new NotFound(req.originalUrl);
  }

  const sections = await sectionModel.getSections();
  const organizers = await organizerModel.getOrganizers()

  const eventsSrc = await eventsModel.getMapOfEvents()




  res.render('index', {
    title: 'Česká Google User Group',
    favicon: 'gug',
    message: 'Hello there!',
    sections,
    organizers,
    eventsSrc: JSON.stringify(eventsSrc)
  });
};

