(function () {
    'use strict';

    angular
        .module('publicTracker')
        .controller('LoginCtrl', ['api', '$state', 'ngToast', 'ConfigService', '$auth', LoginCtrl]);

    function LoginCtrl (api, $state, ngToast, ConfigService, $auth) {
        var self = this;

        // console.log('LoginCtrl');
    
        self.authenticate = function(provider) {
          $auth.authenticate(provider).then(function(response) {
            console.log('response', response)
            $auth.setToken(response.data.access_token);

            console.log('is authenticated?', $auth.isAuthenticated());
          })
        };
    }

} ());
