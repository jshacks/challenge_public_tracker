var db = require('../../db/mongodb');


exports.getAll = function(req, res, next) {
  db.get('agency').find()
  .then(function(data) {
    res.json(data);
  }).catch(function(err) {
    next(err);
  })
}

exports.save = function(req, res) { 

  db.get('agency').insert(req.body).then(function(data) {
    res.send(201, 'Inserted');
  }).catch(function(err) {
    console.log(err);
    next(err);
  });
}

exports.deleteAll = function(req, res) {
  db.get('agency').drop().then(function() {
    res.send(201, 'Dropped');
  }).catch(function(err) {
    next(err);
  });
}