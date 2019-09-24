const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const redis = require('redis');
const swStats = require('swagger-stats');

const app = express()

app.get('/', (req, res) => {
    res.send('Hello World');
});
  
module.exports = app;