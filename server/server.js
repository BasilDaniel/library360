// Get dependencies
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

const path = require('path');
// const http = require('http');
const bodyParser = require('body-parser');
// const Sequelize = require('sequelize');
const db = require('../server/models')

// Get API routes
const api = require('../server/routes/api');

// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Point static path to dist
app.use(express.static(path.join(__dirname, '../dist')));
app.use('/uploads', express.static(path.join(__dirname, '../server/uploads')));

//create CORS Headers
app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.setHeader('Access-Control-Allow-Methods', 'POST, GET, PATCH, DELETE, OPTIONS');
  next();
});

api(app, db);

// Catch all other routes and return the index file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});


db.sequelize.sync().then(function (){
  // Listen on provided port
  app.listen(port, () => console.log(`API running on localhost:${port}`));
})
