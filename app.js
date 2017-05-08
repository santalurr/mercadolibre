var express = require('express');
var app = express();
var path = require("path");

app.use(express.static(__dirname + '/view'));
app.use(express.static(__dirname + '/script'));

app.get('/',function(req,res) {
  res.sendFile('list.html');
});

app.listen(3000, function () {
  console.log('Listening on port 3000');
})