(function () {
    'use strict';

    angular
        .module('publicTracker')
        .controller('ServicesProfileCtrl', ['api', '$state', 'ngToast', 'ConfigService', ServicesProfileCtrl]);

    function ServicesProfileCtrl (api, $state, ngToast, ConfigService) {
        var self = this;

        console.log('ServicesProfileCtrl');
    }

} ());
