const sectionModel = require('../models/sections');
const chapterModel = require('../models/chapter');

module.exports = async function sectionController(req, res) {
  const section = await sectionModel.getSection(req.params.sectionName);
  const chapters = await chapterModel.getChapters(req.params.sectionName);

  res.render('section/detail', {
    section,
    chapters
  });
};


