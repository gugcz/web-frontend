const fetch = require('node-fetch');
const NotFound = require('../errorDefinitions').NotFound;
const FIREBASE_URL = require('../config').FIREBASE_URL;

exports.getSections = async function () {
  const url = FIREBASE_URL + 'sections.json';
  return fetch(url)
    .then(responseConverterFactory(url));
};

exports.getSection = async function (id) {
  const url = FIREBASE_URL + `sections/${id}.json`;

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
