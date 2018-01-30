const sectionModel = require('../models/sections');
const eventsModel = require('../models/events');
const chapterModel = require('../models/chapter');
const GMAP_API_KEY = require('../config').GOOGLE_MAP_API_KEY;

module.exports = async function sectionController(req, res) {
  const section = await sectionModel.getSection(req.params.sectionName);
  const chapters = await chapterModel.getChapters(req.params.sectionName);
  const eventsSrc = await eventsModel.getMapOfEvents()

  res.render('section/detail', {
    section,
    title: section.name,
    favicon: req.params.sectionName,
    chapters,
    events: JSON.stringify(eventsSrc.filter(event => event.section === req.params.sectionName)),
    GMAP_API_KEY: GMAP_API_KEY
  });
};


