const organizerModel = require('../models/organizers');
const chapterModel = require('../models/chapter');
const eventModel = require('../models/events');

module.exports = async function (req, res) {
  let chapterId = req.params.chapterId;

  //console.time('Chapter Page Data');
  let getOrgs =organizerModel.getOrganizersForChapter(chapterId);
  let getInfo =chapterModel.getChapterInfo(chapterId);
  let getPastEvents =eventModel.getPastSixEvents(chapterId);
  let getFutureEvents =eventModel.getFutureEvents(chapterId);
  const [chapter, organizers, pastEvents, futureEvents] = await Promise.all([getInfo, getOrgs, getPastEvents, getFutureEvents]) // TODO catch
  //console.timeEnd('Chapter Page Data');


  String.prototype.replaceAll = function(search, replacement) {
    var target = this;
    return target.replace(new RegExp(search, 'g'), replacement);
  };

  res.render('chapter', {
    title: chapter.name,
    favicon: chapter.section,
    urlImage: chapter.cover,
    urlDescription: chapter.description,

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
