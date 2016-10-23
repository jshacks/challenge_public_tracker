'use strict';

var fs = require('fs');
var _ = require('underscore');

var file = '/Users/alexlipov/Projects/data.json';

var data = '';

fs.createReadStream(file)
    .on('data', function (row) {
        data += row + '';
    })
    .on('end', function () {
        console.log('data length: ', data.length);
        var array = data.split('\n');
        console.log('data length: ', array.length);
        var agencies = [];
        var cleanArray = [];

        // agencies = _.map(array, function (element) {
        //     return element.releases[0].buyer;
        // });

        for (var i = 0; i < 100; i++) {
            var obj = JSON.parse(array[i]);

            if (obj.releases) {
                cleanArray.push(obj.releases[0]);
            }
        }

        console.log('cleanArray: ', cleanArray.length);

        // fs.writeFile("/Users/alexlipov/Projects/allData.json", jsonArray, function(err) {
        //     if(err) {
        //         return console.log(err);
        //     }
        //
        //     console.log("The file was saved!");
        // });
    });
