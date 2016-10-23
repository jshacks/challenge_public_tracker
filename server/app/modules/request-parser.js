'use strict';

var fs = require('fs');
var _ = require('underscore');

var file = '/Users/alexlipov/Projects/data.json';

var data = '';

fs.createReadStream(file)
    .on('data', function (row) {
        console.log(row + '');
        data += row + '';
    })
    .on('end', function () {
        console.log('data length: ', data.length);
        var array = data.split('\n');
        console.log('data length: ', array.length);
        var jsonArray = JSON.stringify(array, false, 4);

        // fs.writeFile("/Users/alexlipov/Projects/allData.json", jsonArray, function(err) {
        //     if(err) {
        //         return console.log(err);
        //     }
        //
        //     console.log("The file was saved!");
        // });
    });
