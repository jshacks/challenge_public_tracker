(function () {
    'use strict';

    angular
        .module('publicTracker')
        .controller('AppCtrl', ['api', '$state', 'ngToast', 'ConfigService', '$auth', 'localStorageService', AppCtrl]);

    function AppCtrl (api, $state, ngToast, ConfigService, $auth, localStorageService ) {
        var self = this;

        console.log('AppCtrl');

        self.isAuthenticated = $auth.isAuthenticated();

        self.user = localStorageService.get('user');

        self.logout = function() {
          $auth.logout();
          localStorageService.remove('ls:user');
          $state.go('login')
        }
    }

} ());
