(function () {
    'use strict';

    angular
        .module('publicTracker')
        .controller('DashboardCtrl', ['api', '$state', 'ngToast', 'ConfigService', DashboardCtrl]);

    function DashboardCtrl (api, $state, ngToast, ConfigService) {
        var self = this;

        console.log('DashboardCtrl');
    }

} ());
