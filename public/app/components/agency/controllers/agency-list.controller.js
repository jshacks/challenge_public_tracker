(function () {
    'use strict';

    angular
        .module('publicTracker')
        .controller('AgencyListCtrl', ['api', '$state', 'ngToast', 'ConfigService', AgencyListCtrl]);

    function AgencyListCtrl (api, $state, ngToast, ConfigService) {
        var self = this;

        console.log('AgencyListCtrl');

        $state.go('app.agencies.list');

        self.getAllAgencies = function getAllAgencies () {
            api.get('contracts')
                .then(function success (data) {
                    self.contractsData = data;
                    console.log('data: ', self.contractsData);
                }, function error (err) {
                    console.log('error: ', err);
                });
        };

        self.getAllAgencies();

        self.getById = function getById (id) {
            $state.go('app.agencies.profile', {id: id});
        };
    }

} ());
