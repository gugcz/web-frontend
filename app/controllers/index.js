const sectionModel = require('../models/sections');
const organizerModel = require('../models/organizers');
const eventsModel = require('../models/events');
const NotFound = require('../errorDefinitions').NotFound;
const GMAP_API_KEY = require('../config').GOOGLE_MAP_API_KEY;

module.exports = async function indexController(req, res) {

  //console.time('Controller')

  /*console.time('Sections')
  let getSections =  sectionModel.getSections();
  const sections = await getSections;
  console.timeEnd('Sections')

  console.time('Orgs')
  let getOrgs =  organizerModel.getOrganizers();
  const organizers = await getOrgs
  console.timeEnd('Orgs')


  console.time('Events')
  let getEvents =  eventsModel.getMapOfEvents();

  const eventsSrc = await getEvents
  console.timeEnd('Events')

  console.timeEnd('Controller')*/

  //console.time('Main Page Data')
  //let getSections =  sectionModel.getSections();
  //let getOrgs =  organizerModel.getOrganizers();
  //let getEvents =  eventsModel.getMapOfEvents();
  const [sections, organizers, eventsSrc] = [[], [], []]//await Promise.all([getSections, getOrgs, getEvents]) // TODO catch
  //console.timeEnd('Main Page Data')


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

