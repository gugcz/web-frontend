const sectionModel = require('../models/sections');
const organizerModel = require('../models/organizers');
const map = require('../controllers/event-map');
const NotFound = require('../errorDefinitions').NotFound;

module.exports = async function indexController(req, res) {
  if (req.originalUrl !== '/' &&
    req.originalUrl !== '/index.html') {
    throw new NotFound(req.originalUrl);
  }

  const sections = await sectionModel.getSections();
  const organizers = await organizerModel.getOrganizers()

  var events = [
    {
      name: "Angular Workshop",
      section: "gdg",
      date: "9.",
      coordinates: {
        lat: "49.191729",
        lnt: "16.608515"
      }
    }
  ]

  map.initMap(events)

  res.render('index', {
    title: 'Česká Google User Group',
    favicon: 'gug',
    message: 'Hello there!',
    sections,
    organizers,
  });
};

