const organizerModel = require('../models/organizers');
const chapterModel = require('../models/chapter');
const eventModel = require('../models/events');

const moment = require('moment')

// TODO - Refactor from event module
function getEventDates(event) {
  if (event.dates.isMultiDay) {
    return {
      isMultiDay: true,
      datesAndTimes: getDate(event.datesFilter.start) + " (" + getTime(event.datesFilter.start) + ") - " + getDate(event.datesFilter.end) + " (" + getTime(event.datesFilter.end) + ")"
    }
  }
  else {
    return {
      isMultiDay: false,
      date: getDate(event.datesFilter.start),
      time: getTimeForSingleDayEvent(event.datesFilter)
    }
  }
}

function getDate(date) {
  return moment(date).format('D.M.Y') // date.getMonth() + 1 cause of months are 0...11
}

function getTime(date) {

  return moment(date).format('HH:mm')
}

function getTimeForSingleDayEvent(dates) {
  return getTime(dates.start) + ' - ' + getTime(dates.end)
}

function chapterHasFutureEvent(futureEvents) {
  return futureEvents.length !== 0
}

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

  if (chapterHasFutureEvent(futureEvents)) {
    let firstEvent = futureEvents[0];
    firstEvent.dates = getEventDates(firstEvent)
  }

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
