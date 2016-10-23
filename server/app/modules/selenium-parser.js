'use strict';

var fs = require('fs');
var parse = require('csv-parse');
var _ = require('underscore');
var webdriver = require('selenium-webdriver');

var file = './../../../storage/data.csv';
var outputFile = './../../../storage/data.json';
var csvData = [];
var requestUrl = 'http://opencontracting.date.gov.md/ocds/';

var driver = new webdriver.Builder().
    withCapabilities(webdriver.Capabilities.chrome()).
    build();

fs.createReadStream(file)
    .pipe(parse({delimiter: ','}))
    .on('data', function (csvrow) {
        console.log(csvrow[0]);
        csvData.push(csvrow[0]);
    })
    .on('end', function () {
        console.log('data length: ', csvData.length);

        // var shortCsv = csvData.slice(0, 100);

        var writeStream = fs.createWriteStream(outputFile);

        for (var i = 0; i < csvData.length; i++) {

            driver.get('http://opencontracting.date.gov.md/ocds/' + csvData[i] + '/json');

            driver.findElement(webdriver.By.xpath("//body")).then(function(elem){
                elem.getText().then(function(textValue) {
                    console.log(textValue + '\n\n');
                    writeStream.write(textValue + '\n');
                });
            });
        }
    });
