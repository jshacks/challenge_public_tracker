(function () {
  'use strict';

  angular
    .module('publicTracker')
    .controller('LoginCtrl', ['api', '$state', 'ngToast', 'ConfigService', '$auth', 'localStorageService', LoginCtrl]);

  function LoginCtrl (api, $state, ngToast, ConfigService, $auth, localStorageService) {
    var self = this;

    self.authenticate = function(provider) {
      $auth.authenticate(provider).then(function(response) {
        console.log('response', response)
        console.log('is authenticated?', $auth.isAuthenticated());

        localStorageService.set('user', response.data.user);
        $auth.setToken(response.data.access_token);
        $state.go('app.dashboard');
      });
    };
  }

} ());
