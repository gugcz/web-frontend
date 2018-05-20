const sectionModel = require('../models/sections');
const eventsModel = require('../models/events');
const chapterModel = require('../models/chapter');
const GMAP_API_KEY = require('../config').GOOGLE_MAP_API_KEY;

module.exports = async function sectionController(req, res) {

  //console.time('Section Page Data');
  let getSection = sectionModel.getSection(req.params.sectionName);
  let getChapters = chapterModel.getChapters(req.params.sectionName);
  let getEvents = eventsModel.getMapOfEvents()
  const [section, chapters, eventsSrc] = await Promise.all([getSection, getChapters, getEvents]) // TODO catch
  //console.timeEnd('Section Page Data');

  res.render('section/detail', {
    section,
    title: section.name,
    favicon: req.params.sectionName,
    chapters,
    events: JSON.stringify(eventsSrc.filter(event => event.section === req.params.sectionName)),
    GMAP_API_KEY: GMAP_API_KEY
  });
};


