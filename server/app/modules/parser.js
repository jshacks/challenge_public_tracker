'use strict';

var fs = require('fs');
var parse = require('csv-parse');
var _ = require('underscore');
var webdriver = require('selenium-webdriver');

var file = './../../../storage/data.csv';
var csvData = [];
var requestUrl = 'http://opencontracting.date.gov.md/ocds/';

var driver = new webdriver.Builder().
    withCapabilities(webdriver.Capabilities.chrome()).
    build();

fs.createReadStream(file)
    .pipe(parse({delimiter: ','}))
    .on('data', function(csvrow) {
        console.log(csvrow[0]);
        csvData.push(csvrow[0]);
    })
    .on('end',function() {
        console.log('data length: ', csvData.length);

        var someUrl = 'http://opencontracting.date.gov.md/ocds/2172470/json';

        driver.get(someUrl);

        driver.findElement(webdriver.By.xpath("//body")).then(function(elem){
            elem.getText().then(function(textValue) {
                console.log(textValue);
            });
        });
    });
