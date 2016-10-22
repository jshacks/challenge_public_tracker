var url = 'mongodb://localhost:27017/jshacks';
var db = require('monk')(url);

console.log('connected to mongodb');

module.exports = db; 
