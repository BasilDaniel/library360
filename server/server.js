// Get dependencies
const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
const Sequelize = require('sequelize');

const connection = new Sequelize('postgres', 'postgres', 'password', {
  dialect: 'postgres',
  host: "localhost",
  port: 5432 
});

connection
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

const PanoImg = connection.define('panoImg', {
  name: {
    type: Sequelize.STRING
  },
  url: {
    type: Sequelize.STRING
  },
  rotationSpeed: {
    type: Sequelize.INTEGER
  },
  manualRotation: {
    type: Sequelize.BOOLEAN
  }
});

// force: true will drop the table if it already exists
PanoImg.sync({force: true});

// Get our API routes
const api = require('../server/routes/api');

const app = express();

// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Point static path to dist
app.use(express.static(path.join(__dirname, '../dist')));
app.use('/uploads', express.static(path.join(__dirname, '../server/uploads')));

app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.setHeader('Access-Control-Allow-Methods', 'POST, GET, PATCH, DELETE, OPTIONS');
  next();
});

// Set our api routes
app.use('/api', api);

// Catch all other routes and return the index file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});


// Get port from environment and store in Express.

const port = process.env.PORT || '3000';
app.set('port', port);


// Create HTTP server.

const server = http.createServer(app);


// Listen on provided port, on all network interfaces.

server.listen(port, () => console.log(`API running on localhost:${port}`));