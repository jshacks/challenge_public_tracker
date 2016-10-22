var uuid = require('node-uuid');
var request = require('request-promise');
var _ = require('lodash');

exports.authFacebook = function(req, res) {
  var access_token;

  console.log(req.body.code)

  var options = {
    url: 'https://graph.facebook.com/v2.3/oauth/access_token',
    qs: {
      client_id: req.body.clientId,
      client_secret: 'ff3c9585f4eb2ee3ee86a9f07cfb98ac',
      redirect_uri: req.body.redirectUri,
      code: req.body.code
    },
    json: true
  }
  request(options).then(function(response) {

    access_token = response.access_token;

    options = {
      url: 'https://graph.facebook.com/me?',
      qs: {
        access_token: response.access_token,
        fields: 'id, name, gender, picture'
      },
      json: true
    }

    return request(options);
  }).then(function(response) {
    console.log(response);
    res.json(_.merge(response, {
      access_token: access_token
    }));
  })
}
