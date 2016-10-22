var db = require('../../db/mongodb');
var _ = require('lodash');
var faker = require('faker');


exports.generateContracts = function(req, res) {
  var contracts = _.range(0, 15).map(function() {
    var contract = {
      title: faker.lorem.sentence(),
      text: faker.lorem.sentences(),
      image: faker.image.image(),
      likes: _.random(0, 99),
      commentsCount: _.random(0, 99)
    };

    contract.comments = _.range(0, _.random(0, 5)).map(function() {
      return {
        username: faker.name.findName(),
        image: faker.image.avatar(),
        text: faker.lorem.text(),
        likes: _.random(0, 99)
      }
    });

    return contract;
  });

  db.get('contracts').insert(contracts).then(function() {
    res.send(201, 'generated');    
  }).catch(function(err) {
    next(err);
  });
}

exports.generateAgencies = function(req, res) {

  var agencies = _.range(0, 10).map(function() {
    return {
      name: faker.lorem.sentence(),
      tendersCount: faker.random.number(),
      contractsCount: faker.random.number(),
      value: faker.random.number()
    };
  });

  db.get('agencies').insert(agencies).then(function() {
    res.send(201, 'generated');
  }).catch(function(err) {
    next(err);
  })
}