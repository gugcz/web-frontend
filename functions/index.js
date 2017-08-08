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


