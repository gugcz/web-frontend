const sectionModel = require('../models/sections');
const organizerModel = require('../models/organizers');
const eventsModel = require('../models/events');
const NotFound = require('../errorDefinitions').NotFound;
const GMAP_API_KEY = require('../config').GOOGLE_MAP_API_KEY;

module.exports = async function indexController(req, res) {


  const sections = await sectionModel.getSections();
  const organizers = await organizerModel.getOrganizers()

  const eventsSrc = await eventsModel.getMapOfEvents()




  res.render('index', {
    title: 'Česká Google User Group',
    favicon: 'gug',
    message: 'Hello there!',
    sections,
    organizers,
    events: JSON.stringify(eventsSrc),
    GMAP_API_KEY: GMAP_API_KEY
  });
};

