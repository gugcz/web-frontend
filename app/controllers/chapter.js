const organizerModel = require('../models/organizers');
const chapterModel = require('../models/chapter');
const sectionModel = require('../models/sections');

module.exports = async function (req, res) {

  const organizers = await organizerModel.getOrganizersForChapter(req.params.chapterId);
  const chapter = await chapterModel.getChapterInfo(req.params.chapterId);
  const section = await sectionModel.getSection(chapter.section);
  res.render('chapter/index', {

    name: chapter.name,
    title: chapter.name,
    section: chapter.section,
    sectionIconURL: section.images.icon,
    description: chapter.description,
    organizers: organizers,

  });
};
