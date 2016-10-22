'use strict';

var utils = require('./../modules/utils');

function test (data, callback) {
    if (data.id == 'lol') {
        callback(utils.getError(409, 'Some error'));
    } else {
        callback(null, 'your data is: ' + data.id);
    }
}

module.exports.testApi = function testApi (req, res) {
    test(req.params, function callback (err, data) {
        if (err) {
            return res.status(err.status).send(err.msg);
        } else {
            return res.send(data);
        }
    });
};
