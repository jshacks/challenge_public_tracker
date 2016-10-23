(function () {
    'use strict';

    angular
        .module('publicTracker')
        .controller('ServicesListCtrl', ['api', '$state', 'ngToast', 'ConfigService', ServicesListCtrl]);

    function ServicesListCtrl (api, $state, ngToast, ConfigService) {
        var self = this;

        if ($state.current.name === 'app.services') {
            $state.go('app.services.list');
        }

        console.log('ServicesListCtrl');
    }

} ());
