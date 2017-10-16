const organizerModel = require('../models/organizers');
const chapterModel = require('../models/chapter');
const eventModel = require('../models/events');

module.exports = async function (req, res) {

  let chapterId = req.params.chapterId;
  const organizers = await organizerModel.getOrganizersForChapter(chapterId);
  const chapter = await chapterModel.getChapterInfo(chapterId);
  const pastEvents = await eventModel.getPastSixEvents(chapterId);
  res.render('chapter/index', {
    title: chapter.name,
    favicon: chapter.section,

    name: chapter.name,
    section: chapter.section,
    sectionIconURL: '/public/images/logos/' + chapter.section + '-icon.png',
    description: chapter.description,
    organizers: organizers,
    pastEvents: pastEvents,
    email: chapter.email,
    links: chapter.links

  });
};
