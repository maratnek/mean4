const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const http = require('http');
const app = express();

// API file for interacting with MongoDB
const api = require(path.join(__dirname, 'server/routes/api'));

// Parsers
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

// Angular DIST output folder
let publicName = 'deploy'; // old path 'dist'
app.use(express.static(path.join(__dirname, publicName)));

// API location
app.use('/api', api);

//Send all other requests to the Angular app
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, publicName + '/index.html'));
});

module.exports = app;
