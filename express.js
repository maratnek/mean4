const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const http = require('http');
const app = express();
const compression = require('compression');
const gm = require('gm');
const request = require('request');
const fs = require('fs');

let publicName = 'deploy'; // old path 'dist'
// API file for interacting with MongoDB
const api = require(path.join(__dirname, 'server/routes/api'));
//GZIP compression
app.use(compression());
// Image Magic for the image optimize
console.log('Convert image');
function convertImage(inputStream) {
  // console.log(inputStream);
  // console.log(gm);
  return inputStream;
	// return gm(inputStream)
		// .crop(3456, 3456, 0, 0)
		// .resize(180, 180)
		// .contrast(-2)
		// .map('pebble_colors_64.gif')
	// 	.dither()
		// .stream();
}
app.get('/assets/img/:fileName', (req, res) => {
	let url = path.join(__dirname,  publicName + req.originalUrl);
	console.log('express assets use for the Image', url);
	res.set('Content-Type', req.originalUrl);
  console.log(req.originalUrl);
  const readStream = fs.createReadStream(url);
	convertImage(readStream).pipe(res);
});

// Angular DIST output folder
// if поставить выше ImageMagic не работает
app.use(express.static(path.join(__dirname, publicName)));
// Parsers
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));


// API location
app.use('/api', api);

//Send all other requests to the Angular app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, publicName + '/index.html'));
});

module.exports = app;
