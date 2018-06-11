const fetch = require('node-fetch');
const NotFound = require('../errorDefinitions').NotFound;

exports.getOrganizers = async function () {
  const url = 'https://gug-web.firebaseio.com/public/organizers.json';
  //const url = 'https://us-central1-gug-web.cloudfunctions.net/getOrganizers?profilePicture=true';
  return fetch(url)
    .then(responseConverterFactory(url));
};

exports.getOrganizersForChapter = async function (id) {

  const url = 'https://us-central1-gug-web.cloudfunctions.net/getOrganizers?chapter=' + id;

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
