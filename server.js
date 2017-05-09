var express = require('express');
var app = express();
var path = require("path");

app.use(express.static(__dirname + '/app'));

app.get('/',function(req,res) {
  res.sendFile('/index.html');
});

app.listen(3000, function () {
  console.log('Listening on port 3000 ..');
})