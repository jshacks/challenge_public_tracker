'use strict';

module.exports.parser = function(adress) {
    var http = require('http');

    var pathA = '/maps/api/geocode/json?address=',
        options = {
            host: 'maps.googleapis.com'
        };

    var fs = require('fs'),
        writeStream = fs.createWriteStream('./locations');

    var callback = function(response) {
        var str = '';

        response.on('data', function (chunk) {
            str += chunk;
        });

        response.on('end', function () {
            writeStream.write(str + '\n');
            console.log(str);
        });
    };

    for (var i=0; i<adress.length; i++) {
        var split = adress[i].split(' '),
            pathB = split.join('+');
        options.path = pathA + pathB;
        http.request(options, callback).end();
    }
};
