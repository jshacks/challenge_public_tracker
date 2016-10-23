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

        self.tendersList = [];

        self.getAllAgencies = function getAllAgencies () {
            api.get('tenders')
                .then(function success (data) {
                    self.tendersList = data.data.slice(0, 10);
                    console.log('data: ', self.tendersList);
                }, function error (err) {
                    console.log('error: ', err);
                });
        };

        console.log('TendersListCtrl');
    }

} ());
