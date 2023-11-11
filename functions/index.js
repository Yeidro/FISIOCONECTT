
const functions = require("firebase-functions");
const express = require('express');
const admin = require('firebase-admin')

const app = express();
admin.initializeApp({


    credential: admin.credential.cert('./permissions.json'),
    databaseURL: 'https://datos-fisioconectt.firebaseio.com'
})

app.get('/hello-world', (req, res) => {
    return res.status(200).json({ message: 'Hello world' });
});


app.use(require('./routes/routes'))
app.use(require('./routes/authRoutes'))

exports.app = functions.https.onRequest(app);

// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

// exports.helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
