const sectionModel = require('../models/sections');
const organizerModel = require('../models/organizers');
const eventsModel = require('../models/events');
const NotFound = require('../errorDefinitions').NotFound;
const GMAP_API_KEY = require('../config').GOOGLE_MAP_API_KEY;

module.exports = async function indexController(req, res) {
  console.log(new Date().getSeconds(), 'Controller start')

  let getSections =  sectionModel.getSections();
  let getOrgs =  organizerModel.getOrganizers();
  let getEvents =  eventsModel.getMapOfEvents();


  const sections = await getSections;
  const organizers = await getOrgs
  const eventsSrc = await getEvents


  console.log(new Date().getSeconds(), 'Models ready')


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

