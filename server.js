var express = require('express');
var app = express();
var path = require("path");
var request = require('request');
var items = require('./items');

app.use(express.static(__dirname + '/app'));

/*
app.get('/api/items/:id', function(req, res){
	request('https://api.mercadolibre.com/items/' + req.params.id, function (error, response, body) {
		var body = JSON.parse(response.body);
		console.log(response.body, body.id);
	 	res.json(response.body);
	});
});
*/

app.use('/api', items);

app.get('/',function(req,res) {
  res.sendFile('/index.html');
});

app.listen(3000, function () {
  console.log('Listening on port 3000 ..');
});