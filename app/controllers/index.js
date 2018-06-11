const organizerModel = require('../models/organizers');
const eventsModel = require('../models/events');
const NotFound = require('../errorDefinitions').NotFound;
const GMAP_API_KEY = require('../config').GOOGLE_MAP_API_KEY;

module.exports = async function indexController(req, res) {
//  console.time('Controller')

  /*console.time('Sections')
  let getSections =  sectionModel.getSections();
  const sections = await getSections;
  console.timeEnd('Sections')

  console.time('Orgs')
  const organizers = await getOrgs
  console.timeEnd('Orgs')


  console.time('Events')
  let getEvents =  eventsModel.getMapOfEvents();

  const eventsSrc = await getEvents
  console.timeEnd('Events')*/


  //console.time('Main Page Data'))
  //console.timeEnd('Main Page Data')
  let getEvents =  eventsModel.getMapOfEvents();
  let getOrgs =  organizerModel.getOrganizers();
  const [eventsSrc, orgs] = await Promise.all([getEvents, getOrgs]) // TODO catch
  res.render('index', {
    title: 'Česká Google User Group',
    favicon: 'gug',
    organizers: orgs,
    events: JSON.stringify(eventsSrc),
    GMAP_API_KEY: GMAP_API_KEY
  });


//  console.timeEnd('Controller')
};

