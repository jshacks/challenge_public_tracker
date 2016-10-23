(function () {
    'use strict';

    angular
        .module('publicTracker')
        .controller('AgencyListCtrl', ['api', '$state', 'ngToast', 'ConfigService', AgencyListCtrl]);

    function AgencyListCtrl (api, $state, ngToast, ConfigService) {
        var self = this;

        console.log('AgencyListCtrl');

        if ($state.current.name === 'app.agencies') {
            $state.go('app.agencies.list');
        }

        self.agenciesList = [];

        self.getAllAgencies = function getAllAgencies () {
            api.get('agencies')
                .then(function success (data) {
                    self.agenciesList = data.data.slice(0, 10);
                    console.log('data: ', self.agenciesList);
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
