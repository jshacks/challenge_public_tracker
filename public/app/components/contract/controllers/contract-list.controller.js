(function () {
    'use strict';

    angular
        .module('publicTracker')
        .controller('ContractListCtrl', ['api', '$state', 'ngToast', 'ConfigService', ContractListCtrl]);

    function ContractListCtrl (api, $state, ngToast, ConfigService) {
        var self = this;

        console.log('ContractListCtrl');
    }

} ());
