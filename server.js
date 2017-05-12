var express = require('express');
var app = express();
var path = require("path");
var request = require('request');
var items = require('./items');

app.use(express.static(__dirname + '/app'));

app.use('/api', items);

app.get('*',function(req,res) {
  res.sendFile('./index.html');
});

app.listen(3000, function () {
  console.log('Listening on port 3000 ..');
});