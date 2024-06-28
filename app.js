// this is not needed since its purpose was to test if the server is running. create endpoints in router folder instead

const express = require('express');
const app = express();

// parse incoming data using json format
app.use(express.json());


// this is one of the router that we will use and here we are importing it into this file
const endpoints = require('./routers/endpoints');

// here we are telling the app to use the endpoints router as the main entry point
app.use('/', endpoints);

// we are exporting the app so that we can use it in the server.js file
module.exports = app;
