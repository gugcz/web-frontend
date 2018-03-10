const fetch = require('node-fetch');
const NotFound = require('../errorDefinitions').NotFound;
const FIREBASE_URL = require('../config').FIREBASE_URL;
const CLOUD_FUNCTIONS_URL = require('../config').CLOUD_FUNCTIONS_URL;

exports.getSections = async function () {
  const url = CLOUD_FUNCTIONS_URL + 'getSections';
  return fetch(url)
    .then(responseConverterFactory(url));
};

exports.getSection = async function (id) {
  const url = CLOUD_FUNCTIONS_URL + 'getSection?id=' + id;

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
