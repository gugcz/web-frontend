const functions = require('firebase-functions');

const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);

// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions
exports.helloGDG = functions.https.onRequest((request, response) => {
  var gdgNamePromise = admin.database().ref('sections/gdg/name').once('value');
  console.log(gdgNamePromise)

  gdgNamePromise.then(nameSnapshot => response.send("Hello " + nameSnapshot.val() + " from Firebase!"));
});

exports.getOrganizers = functions.https.onRequest((request, response) => {
  var organizersPromise = admin.database().ref('organizers').once('value');

  organizersPromise.then(organizerListSnapshot => sendOrganizerListWithName(organizerListSnapshot));


  function sendOrganizerListWithName(organizerListSnapshot) {
    var organizers = organizerListSnapshot.val()

    var organizersArray = Object.keys(organizers).map(function(k) { return organizers[k] });

    var filteredAndShuffledOrganizersArray = shuffle(organizersArray.map(function filterOrganizerArray(organizer) {
      return {name: organizer.name}
    }))
    response.send(filteredAndShuffledOrganizersArray)

  }

  function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }



});



