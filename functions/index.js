const functions = require('firebase-functions');

const app = require('./app').app;


exports.app = functions.https.onRequest(app);
