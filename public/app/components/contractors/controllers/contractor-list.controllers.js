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

        console.log('ContractorListCtrl');
    }

} ());
