(function () {
    'use strict';

    angular
        .module('publicTracker')
        .controller('AppCtrl', ['api', '$state', 'ngToast', 'ConfigService', AppCtrl]);

    function AppCtrl (api, $state, ngToast, ConfigService) {
        var self = this;

        console.log('AppCtrl');
    }

} ());
