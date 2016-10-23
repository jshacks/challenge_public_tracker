(function () {
    'use strict';

    angular
        .module('publicTracker')
        .controller('ContractorListCtrl', ['api', '$state', 'ngToast', 'ConfigService', ContractorListCtrl]);

    function ContractorListCtrl (api, $state, ngToast, ConfigService) {
        var self = this;

        if ($state.current.name === 'app.contractors') {
            $state.go('app.contractors.list');
        }

        self.contractorsList = [];

        self.getAllContractors = function getAllContractors () {
            api.get('contractors')
                .then(function success (data) {
                    console.log(data);
                    self.contractorsList = data.data.slice(0, 10);
                    console.log('list: ', self.contractorsList);
                }, function error (err) {
                    console.log(err);
                });
        };

        self.getAllContractors();

        console.log('ContractorListCtrl');
    }

} ());
