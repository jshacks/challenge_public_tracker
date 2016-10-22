(function () {
    'use strict';

    angular
        .module('publicTracker')
        .controller('LoginCtrl', ['api', '$state', 'ngToast', 'ConfigService', '$auth', LoginCtrl]);

    function LoginCtrl (api, $state, ngToast, ConfigService, $auth) {
        var self = this;

        // console.log('LoginCtrl');
    
        self.authenticate = function(provider) {
          $auth.authenticate(provider);
        };
    }

} ());
