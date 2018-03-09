const organizerModel = require('../models/organizers');
const chapterModel = require('../models/chapter');
const eventModel = require('../models/events');

module.exports = async function (req, res) {
  let chapterId = req.params.chapterId;

  let getOrgs =organizerModel.getOrganizersForChapter(chapterId);
  let getInfo =chapterModel.getChapterInfo(chapterId);
  let getPastEvents =eventModel.getPastSixEvents(chapterId);
  let getFutureEvents =eventModel.getFutureEvents(chapterId);

  const organizers = await getOrgs
  const chapter = await getInfo
  const pastEvents = await getPastEvents
  const futureEvents = await getFutureEvents

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
