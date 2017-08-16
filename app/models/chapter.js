const fetch = require('node-fetch');
const NotFound = require('../errorDefinitions').NotFound;
const CLOUD_FUNCTIONS_URL = require('../config').CLOUD_FUNCTIONS_URL;

exports.getChapterInfo = async function (id) {

  const url = CLOUD_FUNCTIONS_URL + 'getChapter?id=' + id;

  return fetch(url)
    .then(responseConverterFactory(url))
};


exports.getChapters = async function (section) {

  const url = CLOUD_FUNCTIONS_URL + 'getChapters?section=' + section;

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
