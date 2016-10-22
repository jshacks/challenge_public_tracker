var path = require('path');

function Routes (app) {
    'use strict';

    app.get('/', function (req, res) {
        res.sendFile(path.resolve(__dirname + './../public/index.html'));
    });

    var dashboard = require('./app/controllers/dashboard');
    app.get('/dashboard/:id', dashboard.testApi);

}

module.exports.routes = Routes;
