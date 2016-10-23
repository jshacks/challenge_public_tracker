'use strict';

module.exports.parser = function() {
    var rp = require('request-promise');

    var array = [];

    var opt = {
        uri: 'http://4d8e39c0.ngrok.io/agencies',
        // headers: {
        //     'User-Agent': 'Request-Promise'
        // },
        json: true
    };

    rp(opt)
        .then(function (repos) {
            array = repos;
            console.log("get array");
            // var lol = [];
            // lol.push(array[0]);
            // console.log(lol);
            // console.log(array);
            getLocations(repos);
        })
        .catch(function (err) {
            console.error(err.stack);
        });

    //
    // var cb = function(response) {
    //     response.on('data', function (chunk) {
    //         array = chunk;
    //     });
    //
    //     response.on('end', function () {
    //         console.log(array);
    //     });
    // };
    //
    // http.request(opt, cb).end();

    function getLocations(adress) {
        console.log(adress);
        var options = {
            uri: 'https://maps.googleapis.com/maps/api/geocode/json',
            json: true // Automatically parses the JSON string in the response
        };
        // var http = require('http');
        //
        // var pathA = '/maps/api/geocode/json?address=',
        //     options = {
        //         host: 'maps.googleapis.com'
        //     },
        //     i = 0;

        var fs = require('fs'),
            writeStream = fs.createWriteStream('./agencies');

        var updated = [];

        for (var i=0; i<=adress.length; i++) {
            // console.log(i);
            // console.log(adress.length);
            (function (ind) {
                setTimeout(function () {
                    console.log(ind);
                    console.log(updated.length);
                    if (ind == 218) {
                        writeStream.write(JSON.stringify(updated));
                    }
                    console.log(adress[ind].address);
                    if (!adress[ind].address || !adress[ind].address.streetAddress) {
                        adress[ind].address = {};
                        adress[ind].address.streetAddress = '';
                        adress[ind].address.location = {lat: null, lng: null};
                        updated.push(adress[ind]);
                        // writeStream.write(JSON.stringify(adress[ind]) + '\n');
                        return
                    }
                    var split = adress[ind].address.streetAddress.split(' '),
                        pathB = split.join('+');

                    // var callback = function(response) {
                    //
                    //     response.on('data', function (chunk) {
                    //         console.log(chunk + '');
                    //         agency.address.location = chunk.results[0].geometry.location;
                    //     });
                    //
                    //     response.on('end', function () {
                    //         writeStream.write(agency + '\n');
                    //     });
                    // };
                    options.qs = {
                        address: pathB,
                        key: 'AIzaSyADGllVlV8tg_15W0yLPAx8tcEfYvsjvRc'
                    };
                    console.log(options);
                    rp(options)
                        .then(function (repos) {
                            console.log(repos);
                            if (repos.status === 'OK') {
                                adress[ind].address.location = repos.results[0].geometry.location;
                            } else {
                                adress[ind].address.location = {lat: null, lng: null};
                            }
                            updated.push(adress[ind]);
                            // writeStream.write(JSON.stringify(adress[ind]) + '\n');
                        })
                        .catch(function (err) {
                            console.error(err.stack);
                        });
                }, 100 * ind);
            })(i);
        }

        function getAndWrite (agency) {
            var split = agency.address.streetAddress.split(' '),
                pathB = split.join('+');

            // var callback = function(response) {
            //
            //     response.on('data', function (chunk) {
            //         console.log(chunk + '');
            //         agency.address.location = chunk.results[0].geometry.location;
            //     });
            //
            //     response.on('end', function () {
            //         writeStream.write(agency + '\n');
            //     });
            // };
            options.qs = {
                address: pathB,
                key: 'AIzaSyADGllVlV8tg_15W0yLPAx8tcEfYvsjvRc'
            };
            console.log(options);
            rp(options)
                .then(function (repos) {
                    console.log(repos);
                    if (repos.status === 'OK') {
                        agency.address.location = repos.results[0].geometry.location;
                    } else {
                        agency.address.location = {lat: null, lng: null};
                    }
                    writeStream.write(JSON.stringify(agency) + '\n');
                })
                .catch(function (err) {
                    console.error(err.stack);
                });
        }
    }
};
