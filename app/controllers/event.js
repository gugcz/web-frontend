// Page used to show detail of single event
const eventModel = require('../models/events')

module.exports = async function (req, res) {

  var event = await eventModel.getEventInfo(req.params.eventUrl)

  console.log(event)

  var links = [
    {
      type: 'facebook',
      url: ''
    }
  ]

  res.render('event/index', {

    title: event.name,
    favicon: 'gug',

    // Basic info
    dates: event.dates,
    name: event.name,
    subtitle: event.subtitle,
    description: event.description,
    venue: event.venue,
    imgLink: "http://materializecss.com/images/sample-1.jpg",
    imgAlt: "Obrázek eventu",


    // Chapter info
    chapterName: 'GBG České Budějovice',
    chapterLink: 'http://www.gug.cz/cs/gbg/skupiny/ceske-budejovice',
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
