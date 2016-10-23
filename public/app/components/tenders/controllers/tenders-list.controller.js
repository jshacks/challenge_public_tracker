(function () {
    'use strict';

    angular
        .module('publicTracker')
        .controller('TendersListCtrl', ['api', '$state', 'ngToast', 'ConfigService', TendersListCtrl]);

    function TendersListCtrl (api, $state, ngToast, ConfigService) {
        var self = this;

        if ($state.current.name === 'app.tenders') {
            $state.go('app.tenders.list');
        }

        console.log('TendersListCtrl');
    }

} ());
