(function () {
    'use strict';

    angular
        .module('publicTracker')
        .controller('ServicesListCtrl', ['api', '$state', 'ngToast', 'ConfigService', ServicesListCtrl]);

    function ServicesListCtrl (api, $state, ngToast, ConfigService) {
        var self = this;

        console.log('ServicesListCtrl');
    }

} ());
