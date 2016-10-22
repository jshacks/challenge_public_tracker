var express = require('express');
var app = express();

app.use('/public', express.static(__dirname + './../public'));

// parse incoming body
var bodyParser = require('body-parser');
app.use(bodyParser.json());

// routes
require('./routes').routes(app);

var server = app.listen(8000, function () {
    console.log('Start server on port ' + server.address().port);
});
