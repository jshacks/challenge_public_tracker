'use strict';

var rp = require('request-promise');
var fs = require('fs');
var data;

rp({
    method: 'GET',
    uri: 'http://4d8e39c0.ngrok.io/contractors',
    json: true
}).then(function (parsedBody) {
    console.log('data = ' + parsedBody);
    data = parsedBody;

    for (var i = 0; i < data.length; i++) {
        (function (ii) {
            setTimeout(function () {
                rp({
                    method: 'GET',
                    uri: 'http://companii.md/ro/site/index?q=' + encodeURIComponent(data[ii].name),
                    json: true
                }).then(function (newData) {
                    console.log('getting new data: ', newData);
                    data[i].additionalData = Object.keys(newData)[0];
                }).catch(function (err) {
                    console.log(err);
                });
            }, 500 * ii);
        }(i));
    }

    fs.writeFileSync("/Users/alexlipov/Projects/contractors.json", data, function(err) {
        if(err) {
            return console.log(err);
        }

        console.log("The file was saved!");
    });

}).catch(function (err) {
    console.error(err);
});
