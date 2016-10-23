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

        console.log('ContractListCtrl');
    }

} ());
