const organizerModel = require('../models/organizers');
const chapterModel = require('../models/chapter');
const sectionModel = require('../models/sections');

module.exports = async function (req, res) {

  const organizers = await organizerModel.getOrganizersForChapter(req.params.chapterId);
  const chapter = await chapterModel.getChapterInfo(req.params.chapterId);
  const section = await sectionModel.getSection(chapter.section);
  res.render('chapter/index', {
    title: chapter.name,
    favicon: chapter.section,

    name: chapter.name,
    section: chapter.section,
    sectionIconURL: '/public/images/logos/' + chapter.section + '-icon.png',
    description: chapter.description,
    organizers: organizers,
    email: chapter.email,
    links: chapter.links

  });
};
