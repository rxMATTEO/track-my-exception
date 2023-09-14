const http = require('http');
const randomToken = require('random-token');

const port = 3000;
const express = require('express');

const app = express();
const json = express.json();
const path = require("path");

app.use(express.static(path.join(__dirname, 'public')));
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, HEAD, OPTIONS, POST, PUT');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  next();
});
app.get('/*', (req, res, next) => {
  if (req.path.includes('api')) {
    return next();
  }
  res.sendFile(__dirname + './index.html');
});

app.listen(port, () => console.log('Server is started'));
