(function () {
    'use strict';

    angular
        .module('publicTracker')
        .controller('LoginCtrl', ['api', '$state', 'ngToast', 'ConfigService', LoginCtrl]);

    function LoginCtrl (api, $state, ngToast, ConfigService) {
        var self = this;

        console.log('LoginCtrl');
    }

} ());
