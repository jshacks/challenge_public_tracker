(function () {
    'use strict';

    angular
        .module('publicTracker')
        .controller('TendersListCtrl', ['api', '$state', 'ngToast', 'ConfigService', TendersListCtrl]);

    function TendersListCtrl (api, $state, ngToast, ConfigService) {
        var self = this;

        console.log('TendersListCtrl');
    }

} ());
