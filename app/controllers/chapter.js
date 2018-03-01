const organizerModel = require('../models/organizers');
const chapterModel = require('../models/chapter');
const eventModel = require('../models/events');

module.exports = async function (req, res) {

  let chapterId = req.params.chapterId;
  const organizers = await organizerModel.getOrganizersForChapter(chapterId);
  const chapter = await chapterModel.getChapterInfo(chapterId);
  const pastEvents = await eventModel.getPastSixEvents(chapterId);
  const futureEvents = await eventModel.getFutureEvents(chapterId);

  String.prototype.replaceAll = function(search, replacement) {
    var target = this;
    return target.replace(new RegExp(search, 'g'), replacement);
  };

  res.render('chapter', {
    title: chapter.name,
    favicon: chapter.section,

    name: chapter.name,
    section: chapter.section,
    sectionIconURL: '/images/logos/' + chapter.section + '-icon.png',
    description: (chapter.description || '').replaceAll('\n', '<br/>'),
    chapterCover: chapter.cover,
    organizers: organizers,
    futureEvents: futureEvents,
    pastEvents: pastEvents,
    email: chapter.email,
    links: chapter.links

  });
};
