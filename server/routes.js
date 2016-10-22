var path = require('path');

function Routes (app) {
    'use strict';

    app.get('/', function (req, res) {
        res.sendFile(path.resolve(__dirname + './../public/index.html'));
    });

    // var dashboard = require('./app/controllers/dashboard');
    // app.get('/dashboard/:id', dashboard.testApi);

    var agency = require('./app/controllers/agency');
    app.get('/agency', agency.getAll);
    app.post('/agency', agency.save);
    app.delete('/agency/all', agency.deleteAll);

    var contract = require('./app/controllers/contract');
    app.get('/agency', contract.getAll);
    app.post('/agency', contract.save);
    app.delete('/agency/all', contract.deleteAll);
}

module.exports.routes = Routes;
