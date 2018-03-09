const sectionModel = require('../models/sections');
const eventsModel = require('../models/events');
const chapterModel = require('../models/chapter');
const GMAP_API_KEY = require('../config').GOOGLE_MAP_API_KEY;

module.exports = async function sectionController(req, res) {
  let getSection = sectionModel.getSection(req.params.sectionName);
  let getChapters = chapterModel.getChapters(req.params.sectionName);
  let getEvents = eventsModel.getMapOfEvents()

  const section = await getSection
  const chapters = await getChapters
  const eventsSrc = await getEvents

  res.render('section/detail', {
    section,
    title: section.name,
    favicon: req.params.sectionName,
    chapters,
    events: JSON.stringify(eventsSrc.filter(event => event.section === req.params.sectionName)),
    GMAP_API_KEY: GMAP_API_KEY
  });
};


