// Page used to show detail of single event
const eventModel = require('../models/events')

module.exports = async function (req, res) {

  var event = await eventModel.getEventInfo(req.params.eventUrl)

  console.log(event)


  res.render('event/index', {

    title: event.name,
    favicon: 'gug',

    // Basic info
    dates: event.dates,
    name: event.name,
    cover: event.cover,
    subtitle: event.subtitle,
    description: event.description,
    venue: event.venue,
    regFormLink: event.regFormLink,



    // Chapter info
    chapters: event.chapters,
    organizers: event.organizers,
    links: event.links
  });
};

function getDate(date) {
  console.log(date.toLocaleString())
  return date.getDate() + '.' + date.getMonth() + '.' + date.getFullYear()
}

function getTime(date) {
  return date.toLocaleTimeString()
}
