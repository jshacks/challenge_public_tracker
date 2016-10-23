var path = require('path');

function Routes (app) {
    'use strict';

    app.get('/', function (req, res) {
        res.sendFile(path.resolve(__dirname + './../public/index.html'));
    });


    // var dashboard = require('./app/controllers/dashboard');
    // app.get('/dashboard/:id', dashboard.testApi);

    var agency = require('./app/controllers/agency');
    app.get('/agencies', agency.getAll);
    app.post('/agencies', agency.save);
    app.delete('/agencies/all', agency.deleteAll);

    var contract = require('./app/controllers/contract');
    app.get('/contracts', contract.getAll);
    app.post('/contracts', contract.save);
    app.delete('/contracts/all', contract.deleteAll);

    var generate = require('./app/controllers/generate');
    app.get('/generate/agencies', generate.generateAgencies);
    app.get('/generate/contracts', generate.generateContracts);

    var auth = require('./app/controllers/auth');
    app.post('/auth/facebook', auth.authFacebook)
}

module.exports.routes = Routes;
