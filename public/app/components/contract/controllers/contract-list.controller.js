(function () {
    'use strict';

    angular
        .module('publicTracker')
        .controller('ContractListCtrl', ['api', '$state', 'ngToast', 'ConfigService', ContractListCtrl]);

    function ContractListCtrl (api, $state, ngToast, ConfigService) {
        var self = this;

        if ($state.current.name === 'app.contracts') {
            $state.go('app.contracts.list');
        }

        self.contractsList = [];

        self.getAllContracts = function getAllContracts () {
            api.get('contracts')
                .then(function success (data) {
                    self.contractsList = data.data.slice(0, 10);
                    console.log('data: ', self.contractsList);
                }, function error (err) {
                    console.log('error: ', err);
                });
        };

        self.getAllContracts();

        console.log('ContractListCtrl');
    }

} ());
