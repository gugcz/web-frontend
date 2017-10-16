const fetch = require('node-fetch');
const NotFound = require('../errorDefinitions').NotFound;
const CLOUD_FUNCTIONS_URL = require('../config').CLOUD_FUNCTIONS_URL;

exports.getEventInfo = async function (id) {

  const url = CLOUD_FUNCTIONS_URL + 'getEvent?id=' + id;

  return fetch(url)
    .then(responseConverterFactory(url))
};

exports.getPastSixEvents = async function (chapterId) {

  const url = CLOUD_FUNCTIONS_URL + 'getPastSixEvents?chapter=' + chapterId;

  return fetch(url)
    .then(responseConverterFactory(url))
};


// TODO move to model helpers
function responseConverterFactory(resourceName) {
  return function responseToJson(response) {
    return response.json()
      .then(data => {
        if (!data) {
          throw new NotFound(resourceName);
        }

        return data;
      })
  }
}

// Get a particular event
exports.get = function (id, cb) {
  e = {
    id: 1,
    name: 'GUG Howto',
    description: 'Nachytřovací setkání',
    venue: 'Praha'
  }
  cb(e)
}

// Get all events
exports.all = function (cb) {
  e = [
    {
      id: 1,
      name: 'GUG Howto',
      description: 'Nachytřovací setkání',
      venue: 'Praha'
    },
    {
      id: 2,
      name: 'GUG Hackaton',
      description: 'Pure web awesomeness',
      venue: 'Tobis place'
    },
    {
      id: 3,
      name: 'DevFest',
      description: 'Festival of code',
      venue: 'Ostrava'
    }
  ]
  cb(e)
}
