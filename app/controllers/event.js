// Page used to show detail of single event
const eventModel = require('../models/events')

module.exports = async function (req, res) {

  console.time('Event Page Data');
  var event = await eventModel.getEventInfo(req.params.eventUrl)
  console.timeEnd('Event Page Data');

  //console.log(event)

  String.prototype.replaceAll = function(search, replacement) {
    var target = this;
    return target.replace(new RegExp(search, 'g'), replacement);
  };


  res.render('event', {

    title: event.name,
    favicon: 'gug',

    // Basic info
    dates: event.dates,
    name: event.name,
    cover: event.cover,
    subtitle: event.subtitle,
    description: replaceMarkdownHtmlTags(event.description),
    venue: event.venue,
    regFormLink: event.regFormLink,



    // Chapter info
    chapters: event.chapters,
    organizers: event.organizers,
    links: event.links
  });
};

function getDate(date) {
  //console.log(date.toLocaleString())
  return date.getDate() + '.' + date.getMonth() + '.' + date.getFullYear()
}

function getTime(date) {
  return date.toLocaleTimeString()
}

function replaceMarkdownHtmlTags(description) {
  return description.replaceAll('\n', '<br/>')
                    .replaceAll('strong', 'b')
                    .replaceAll('h1', 'h5')
                    .replaceAll('h2', 'h5')
                    .replaceAll('h3', 'h5')
                    .replaceAll('h4', 'h5')
                    .replaceAll('h6', 'h5')
}
