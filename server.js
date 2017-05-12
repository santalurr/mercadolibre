var express = require('express');
var app = express();
var routes = require('./api/routes.js');

app.use(express.static(__dirname + '/app'));

app.use('/api', routes);

app.get('*',function(req,res) {
  res.sendFile('./index.html');
});

app.listen(3000, function () {
  console.log('Listening on port 3000 ..');
});