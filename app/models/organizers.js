const fetch = require('node-fetch');
const NotFound = require('../errorDefinitions').NotFound;

exports.getOrganizers = async function () {
  const url = 'https://us-central1-gug-web.cloudfunctions.net/getOrganizers';
  return fetch(url)
    .then(responseConverterFactory(url));
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